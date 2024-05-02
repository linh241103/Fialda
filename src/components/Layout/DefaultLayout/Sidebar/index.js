import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import images from '~/assets/images';

// const cx = classNames.bind(styles)

function Sidebar() {

    const cx = classNames.bind(styles);

    const menuSides = [
        { icon: images.ic1, tex: 'F1' },
        { icon: images.ic2, tex: 'F2' },
        { icon: images.ic3, tex: 'F3' },
        { icon: images.ic4, tex: 'F4' },
        { icon: images.ic5, tex: 'F6' }
    ]
    const menuIcons = [
        { icon: images.ic6 },
        { icon: images.ic7 }
    ]

    return <aside className={cx('wrapper')}>
        {menuSides.map((item, index) => (
            <div key={index} className={cx('slide-item')} >
                <span className={cx('icon')}><img src={item.icon} alt="icon"/></span>
                <span className={cx('tex')}>{item.tex}</span>
            </div>
        ))}
        {menuIcons.map((item, index) => (
            <div key={index} className={cx('slide-icon')} >
                <span className={cx('icon')}><img src={item.icon} alt="icon"/></span>
            </div>
        ))}
        <hr></hr>
        <div className={cx('slide-user')} >
            <span className={cx('icon-user')}><img src={images.ic8} alt="icon"/></span>
        </div>
        <div className={cx('tex-w')}>
            <div>Web</div>
            <div>Terminal</div>
            <div className={cx('tex-t')}>1.1.8.5</div>
        </div>
    </aside>
}

export default Sidebar;