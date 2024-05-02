import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles)

function Header() {

    const menuItems = [
        { icon: images.icon1, name: 'Tổng hợp thị trường', href: '/' },
        { icon: images.icon2, name: 'Lọc cổ phiếu', href: '/' },
        { icon: images.icon3, name: 'Cổ phiếu A-Z', href: '/' },
        { icon: images.icon4, name: 'Bảng giá', href: '/priceList' },
        { icon: images.icon5, name: 'Phân tích kỹ thuật', href: '/' }
    ];

    const menuIcons = [
        {ico: images.ico1},
        {ico: images.ico2},
        {ico: images.ico3},
    ];
 
    const menuIndexs = [
        { tex: 'VNINDEX', num: '1,284.09', per: '-0.47%', dec: '-6.09' },
        { tex: 'VN30', num: '1,296.90', per: '-0.48%', dec: '-6.30' },
        { tex: 'HNXINDEX', num: '242.58', per: '-0.55%', dec: '-1.34' }
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <a href="/">
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Fialda" />
                </div>
            </a>
            <div className={cx('shortcut')}>
                <ul className={cx('menu')}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>
                                <div className={cx('ico')}> <img src={item.icon} alt="logo" /></div>
                                <div className={cx('text')}>{item.name}</div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('content')}>
                {menuIndexs.map((item, index) => (
                    <div key={index} className={cx('index-item')} >
                        <div className={cx('head-up')}>
                            <div className={cx('trim-text')}>{item.tex}</div>
                            <div className={cx('current')}>{item.num}</div>
                        </div>
                        <div className={cx('head-down')}>
                            <div className={cx('icon-down')}></div>
                            <div className={cx('percent')}>
                                    {item.per}
                                <div className={cx('number')}>{item.dec}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={cx('ico-l')}>
                    {menuIcons.map((item, index) => (
                       <span key={index}><img src={item.ico} alt="logo" /></span> 
                    ))}
                </div>
            </div>
        </div>
    </header>;
}

export default Header;