import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import images from "~/assets/images";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Cross,
  AreaChart, Area, BarChart, Bar, Rectangle, Treemap
} from 'recharts';

const cx = classNames.bind(styles);

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]; 

    const CustomizedCross = (props) => {
        const { width, height, stroke, fill, formattedGraphicalItems } = props;
        console.log(props);
        const firstSeries = formattedGraphicalItems[0];
        const secondPoint = firstSeries?.props?.points[1];

        return (
        <Cross
            y={secondPoint?.y}
            x={secondPoint?.x}
            top={5}
            left={50}
            height={height}
            width={width}
            stroke={stroke ?? '#000'}
            fill={fill ?? 'none'}
        />
        );
  };

  const data1 = [
    {
      name: '10.00',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '11.00',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '12.00',
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '13.00',
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '14.00',
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '15.00',
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '16.00',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: 'axis',
      children: [
        { name: 'Axes', size: 1302 },
        { name: 'Axis', size: 24593 },
        { name: 'AxisGridLine', size: 652 },
        { name: 'AxisLabel', size: 636 },
        { name: 'CartesianAxes', size: 6703 },
      ],
    },
    {
      name: 'controls',
      children: [
        { name: 'AnchorControl', size: 2138 },
        { name: 'ClickControl', size: 3824 },
        { name: 'Control', size: 1353 },
        { name: 'ControlList', size: 4665 },
        { name: 'DragControl', size: 2649 },
        { name: 'ExpandControl', size: 2832 },
        { name: 'HoverControl', size: 4896 },
        { name: 'IControl', size: 763 },
        { name: 'PanZoomControl', size: 5222 },
        { name: 'SelectionControl', size: 7862 },
        { name: 'TooltipControl', size: 8435 },
      ],
    },
    {
      name: 'data',
      children: [
        { name: 'Data', size: 20544 },
        { name: 'DataList', size: 19788 },
        { name: 'DataSprite', size: 10349 },
        { name: 'EdgeSprite', size: 3301 },
        { name: 'NodeSprite', size: 19382 },
        {
          name: 'render',
          children: [
            { name: 'ArrowType', size: 698 },
            { name: 'EdgeRenderer', size: 5569 },
            { name: 'IRenderer', size: 353 },
            { name: 'ShapeRenderer', size: 2247 },
          ],
        },
        { name: 'ScaleBinding', size: 11275 },
        { name: 'Tree', size: 7147 },
        { name: 'TreeBuilder', size: 9930 },
      ],
    },
    {
      name: 'events',
      children: [
        { name: 'DataEvent', size: 7313 },
        { name: 'SelectionEvent', size: 6880 },
        { name: 'TooltipEvent', size: 3701 },
        { name: 'VisualizationEvent', size: 2117 },
      ],
    },
    {
      name: 'legend',
      children: [
        { name: 'Legend', size: 20859 },
        { name: 'LegendItem', size: 4614 },
        { name: 'LegendRange', size: 10530 },
      ],
    },
    {
      name: 'operator',
      children: [
        {
          name: 'distortion',
          children: [
            { name: 'BifocalDistortion', size: 4461 },
            { name: 'Distortion', size: 6314 },
            { name: 'FisheyeDistortion', size: 3444 },
          ],
        },
        {
          name: 'encoder',
          children: [
            { name: 'ColorEncoder', size: 3179 },
            { name: 'Encoder', size: 4060 },
            { name: 'PropertyEncoder', size: 4138 },
            { name: 'ShapeEncoder', size: 1690 },
            { name: 'SizeEncoder', size: 1830 },
          ],
        },
        {
          name: 'filter',
          children: [
            { name: 'FisheyeTreeFilter', size: 5219 },
            { name: 'GraphDistanceFilter', size: 3165 },
            { name: 'VisibilityFilter', size: 3509 },
          ],
        },
        { name: 'IOperator', size: 1286 },
        {
          name: 'label',
          children: [
            { name: 'Labeler', size: 9956 },
            { name: 'RadialLabeler', size: 3899 },
            { name: 'StackedAreaLabeler', size: 3202 },
          ],
        },
        {
          name: 'layout',
          children: [
            { name: 'AxisLayout', size: 6725 },
            { name: 'BundledEdgeRouter', size: 3727 },
            { name: 'CircleLayout', size: 9317 },
            { name: 'CirclePackingLayout', size: 12003 },
            { name: 'DendrogramLayout', size: 4853 },
            { name: 'ForceDirectedLayout', size: 8411 },
            { name: 'IcicleTreeLayout', size: 4864 },
            { name: 'IndentedTreeLayout', size: 3174 },
            { name: 'Layout', size: 7881 },
            { name: 'NodeLinkTreeLayout', size: 12870 },
            { name: 'PieLayout', size: 2728 },
            { name: 'RadialTreeLayout', size: 12348 },
            { name: 'RandomLayout', size: 870 },
            { name: 'StackedAreaLayout', size: 9121 },
            { name: 'TreeMapLayout', size: 9191 },
          ],
        },
        { name: 'Operator', size: 2490 },
        { name: 'OperatorList', size: 5248 },
        { name: 'OperatorSequence', size: 4190 },
        { name: 'OperatorSwitch', size: 2581 },
        { name: 'SortOperator', size: 2023 },
      ],
    },
  ];
  
  const COLORS = ['#e35253', '#3cdc96', '#e35253', '#3cdc96', '#e35253', '#3cdc96'];
  
  const gradientOffset = () => {
    const dataMax = Math.max(...data1.map((i) => i.uv));
    const dataMin = Math.min(...data1.map((i) => i.uv));
  
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
  
    return dataMax / (dataMax - dataMin);
  };
  
  const off = gradientOffset();

function Home() {
    const [count, setCount] = useState(1);
    const [randomDecimals, setRandomDecimals] = useState([]);
    const [randomDecis, setRandomDecis] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    class CustomizedContent extends PureComponent {
        render() {
          const { root, depth, x, y, width, height, index, colors, name } = this.props;
      
          return (
            <g>
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                  fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
                  stroke: '#fff',
                  strokeWidth: 2 / (depth + 1e-10),
                  strokeOpacity: 1 / (depth + 1e-10),
                }}
              />
              {depth === 1 ? (
                <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                  {name}
                </text>
              ) : null}
              {depth === 1 ? (
                <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                  {index + 1}
                </text>
              ) : null}
            </g>
          );
        }
      }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount === 6 ? 1 : prevCount + 1));
        }, 1000); 

        const generateRandomDecimals = () => {
            const decimals = Array.from({ length: 10 }, () => (Math.random() * 90 + 10).toFixed(2));
            setRandomDecimals(decimals);
        };

        generateRandomDecimals();

        const generateRandomNumbers = () => {
            const decis = Array.from({ length: 10 }, () => (Math.random()).toFixed(2));
            setRandomDecis(decis);
        };

        generateRandomNumbers();

        return () => clearInterval(interval); 

    }, []);

    const volumeLists = [
        { id:1, tt: 'GÓI HỘI VIÊN VIP - EXPERT', by: 'Gửi bởi: Fialda Corp', at: 'Lúc: 09/06/2023 11:35', content: 'Các hội viên VIP được nhận tín hiệu MUA/BÁN theo thời gian thực là sự kết hợp tín hiệu chart pattern của Oneil, Mark Minervini, Dan Zanger; Hệ thống chỉ báo của Alexander Elder và phương pháp VSA được xử lý bằng công nghệ AI. Ngoài ra hội viên VIP còn được nhận khuyến nghị về Danh Mục Cổ Phiếu tăng trưởng tốt có tiềm năng thành Siêu CP'},
        { id:2, tt: 'Giới thiệu bạn bè nhận ưu đãi khủng từ chương trình Fialda Membership', by: 'Gửi bởi: Fialda Corp', at: 'Lúc: 26/10/2021 14:27', content: 'Mọi thành viên (bao gồm cả thành viên đang sử dụng gói Free) đều có thể tham gia. Giới thiệu mỗi người bạn mua gói dịch vụ của Fialda thành công bạn nhận ngay FPoint tương đương 20% giá trị đơn hàng người bạn của bạn đã mua. Người được giới thiệu sẽ được giảm giá 5% giá trị đơn hàng'},
        { id:3, tt: 'Nắm bắt dòng tiền nhà tạo lập với chỉ báo MCDX trên Fialda Web', by: 'Gửi bởi: Fialda Corp', at: 'Lúc: 06/09/2021 16:33', content: '', href: 'https://www.youtube.com/embed/fF3UuGguEOY?si=OANNjME9MdEGkTFa'},
        { id:4, tt: 'Thông báo mời hợp tác trở thành cộng tác viên Fialda!', by: 'Gửi bởi: Fialda Corp', at: 'Lúc: 03/07/2021 11:15', content: 'Fialda xin trân trọng cảm ơn các bạn vì những đóng góp tích cực của các bạn trong thời gian qua. Theo nội dung chương trình “Giới thiệu bạn bè nhận ưu đãi” các hội viên Vàng, Bạc sẽ có cơ hội hợp tác trở thành cộng tác viên...'},
    ]

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % volumeLists.length);
        }, 2500); 
        return () => clearInterval(interval1); 
    }, [volumeLists.length]);

    const majorLists = [
        { name: 'Dầu khí (0001 - Cấp 1)' },
        { name: 'Nguyên vật liệu (1000 - Cấp 1)' },
        { name: 'Công nghiệp (2000 - Cấp 1)' },
        { name: 'Hàng tiêu dùng (3000 - Cấp 1)' },
        { name: 'Dược phẩm và Y tế (3000 - Cấp 1)' },
        { name: 'Dịch vụ Tiêu dùng (5000 - Cấp 1)' },
        { name: 'Viễn thông (6000 - Cấp 1)' },
        { name: 'Tiện ích Cộng đồng (7000 - Cấp 1)' },
        { name: 'Tài chính (8000 - Cấp 1)' },
        { name: 'Công nghệ Thông tin (9000 - Cấp 1)' }
    ];
    const top1Lists = [
        { na: 'TSD', nu: '158.06%', color: '#3cdc96', colo: '#3ca57e'},
        { na: 'TV6', nu: '113.89%', color: '#318a69', colo: '#357060'},
        { na: 'HFX', nu: '94.23%', color: '#2c6655', colo: '#325853'},
        { na: 'CKA', nu: '84.5%', color: '#29534b', colo: '#304c4d'},
        { na: 'GGG', nu: '84%', color: '#29524a', colo: '#304b4c'},
    ]

    const top2Lists = [
        { na: 'PEG', nu: '82.5%', color: '#294f49'},
        { na: 'VHI', nu: '79.45%', color: '#284a45'},
        { na: 'PIV', nu: '78.57%', color: '#274845'},
        { na: 'TDS', nu: '75.93%', color: '#274342'},
        { na: 'HMR', nu: '70%', color: '#25383c'},
    ]
    
    const nationLists = [
        { na: 'Dow 30', im: images.icn1},
        { na: 'Nasdaq Futures', im: images.icn1},
        { na: 'S&P 500 Futures', im: images.icn1},
        { na: 'Nikkei 225', im: images.icn2},
        { na: 'Shanghai', im: images.icn3},
        { na: 'HangSeng', im: images.icn4},
        { na: 'KOSPI', im: images.icn5},
        { na: 'FTSE 100', im: images.icn6},
        { na: 'DAX 30', im: images.icn7},
        { na: 'CAC 40', im: images.icn8},
    ]

    const currentItem = volumeLists[currentIndex];
    const renderContent = () => {
        if (currentItem.content) {
            return <div>{currentItem.content}</div>;
        } else if (currentItem.href) {
            return <iframe src={currentItem.href} width="100%" height="200" title="Embedded Video" frameBorder="0" allowFullScreen></iframe>;
        } else {
            return null;
        }
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + volumeLists.length) % volumeLists.length;
        setCurrentIndex(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % volumeLists.length;
        setCurrentIndex(nextIndex);
    };

    return <main className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('d1')}>
                <div className={cx('ima')}>
                    <img src={images.ima1} alt="images" />
                </div>
                <div className={cx('blo')}>
                    <div className={cx('til')}>
                        <span>F-Data</span>
                    </div>
                    <div className={cx('content')}>
                        {/* <span>Đầy đủ các loại dữ liệu: Chứng khoán VN, Index thế giới, futures, forex, crypto</span>
                        <span>Cập nhật dữ liệu giá realtime cho AmiBroker, Metastock, MetaTrader</span>
                        <span>Tốc độ cập nhật siêu nhanh & vận hành ổn định</span> */}
                        <span>Tích hợp với các bộ công cụ tư vấn đầu tư của bên thứ 3</span>
                    </div>
                </div>
                <div className={cx('bloc')}>
                    <span className={cx('spa1')}><img src={images.sv1} alt="images" /></span>
                    <hr className={cx('dak')}></hr>
                    <span className={cx('spa2')}><img src={images.sv2} alt="images" /></span>
                </div>
            </div>
            <div className={cx('d2')}>
                <div className={cx('imam')}><img src={images.ima2} alt="images" /></div>
                <div className={cx('b2')}>
                    <div className={cx('til')}>
                        <span>F-Mobile</span>
                    </div>
                    <div className={cx('ip')}>
                        <span className={cx('i3')}><img src={images.ima3} alt="images" /></span>
                        <span className={cx('i4')}><img src={images.ima4} alt="images" /></span>
                    </div>
                </div>
                <div className={cx('b3')}>
                    <div className={cx('ne')}>
                        <span>Mới</span>
                    </div>
                    <hr className={cx('hne')}></hr>
                </div>
            </div>
            <div className={cx('d3')}>
                <div className={cx('bd3')}>
                    <span className={cx('i5')}><img src={images.ima5} alt="images" /></span>
                </div>
                <div className={cx('blx')}></div>
                <div className={cx('ini')}>
                    <div className={cx('eli')}>
                        <span className={cx('bc')}>Báo cáo mới </span>
                        <div className={cx('rd')}>
                            <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                            <span>Xem tất cả</span>
                        </div>
                        <div className={cx('itc')}>
                            <span key={count}>{count}</span> / 6
                        </div>
                        <div className={cx('sna')}>
                            <span className={cx('i7')}><img src={images.ima7} alt="images" /></span>
                            <span className={cx('i8')}><img src={images.ima7} alt="images" /></span>
                        </div>
                    </div>
                    <div>
                        <table className={cx('tb')}>
                            <thead className={cx('the')}>
                                <th className={cx('he1')}>Mã</th>
                                <th className={cx('he2')}>cùng kỳ (%)</th>
                                <th className={cx('he3')}>cùng kỳ (%)</th>
                                <th className={cx('he4')}>4 quý</th>
                                <th className={cx('he5')}>P/E</th>
                            </thead>
                            <tbody className={cx('tbe')}>
                                <td className={cx('te1')}>A32</td>
                                <td className={cx('te2')}>N/A</td>
                                <td className={cx('te3')}>N/A</td>
                                <td className={cx('te4')}>438</td>
                                <td className={cx('te5')}>24.84</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('d4')}>
                <div className={cx('ic4')}>
                    <span className={cx('ilc')}><img src={images.ima8} alt="images" /></span>
                </div>
                <div className={cx('iui')}>
                    <div className={cx('itt')}>
                        FIALDA khuyên dùng bộ lọc
                    </div>
                    <div className={cx('cte')}>
                        <ul>
                            <li>01. Giá vượt đỉnh 01 tuần + Đột biến khối lượng</li>
                            <li>02. Giá đang tăng + Đột biến khối lượng</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('d5')}>
                <div className={cx('logi')}>
                    Đăng nhập để sử dụng chức năng
                </div>
                <div>
                    <button className={cx('btn')}>
                        <span className={cx('sgn')}>Đăng nhập</span>
                        <span className={cx('il5')}><img src={images.icu} alt="images" /></span>
                    </button>
                </div>
            </div>
        </div>
        <div className={cx('container-item')}>
            {/* bl1 */}
            <div className={cx('ite-blc1')}>   
                <div className={cx('tab1')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1')}>
                            Biến động nhóm ngành
                        </div>
                        <div className={cx('tab1-title2')}>
                            Biến động <span>(HSX, HNX)</span>
                        </div>
                    </div>
                    <div className={cx('tab1-table')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ngành</th>
                                    <th>P/E</th>
                                    <th>%thay đổi 1D</th>
                                    <th>PB dòng tiền</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {majorLists.map((item, index) => {
                                const randomNumber = parseFloat(randomDecis[index]);
                                const sign = index < 4 ? '+' : '-';
                                return (
                                    <tr key={index} className={cx('alternate-row')}>
                                        <td>
                                            <span className={cx('it-list')}>{item.name}</span>
                                        </td>
                                        <td>{randomDecimals[index]}</td>
                                        <td>
                                            {`${sign}${Math.abs(randomNumber)}%`}
                                        </td>
                                        <td>
                                            <div className={cx('colo')}>

                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('rd','watch')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Xem tất cả</span>
                    </div>
                </div>
                <div className={cx('tab1','ite3-bl3')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1')}>
                           Giao dịch NĐT NN
                        </div>
                        <div className={cx('tab1-title2')}>
                           Tự doanh
                        </div>
                    </div>
                    <div className={cx('tb-nati')}>
                        <div className={cx('tb-na','tb-na1')}>1d</div>
                        <div className={cx('tb-na')}>1w</div>
                        <div className={cx('tb-na')}>1m</div>
                        <div className={cx('tb-na')}>3m</div>
                        <div className={cx('tb-na')}>6m</div>
                        <div className={cx('tb-na')}>1y</div>
                    </div>
                    <div className={cx('buy-tt1')}>BIỂU ĐỒ NĐTNN MUA BÁN RÒNG</div>
                    <div className={cx('bd-ac')}>
                        <ResponsiveContainer width="100%" height={110}>
                            <AreaChart
                            width={500}
                            height={110}
                            data={data1}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#fff' }} />
                            <YAxis tick={{ fontSize: 12, fill: '#fff' }} />
                            <Tooltip />
                            <defs>
                                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="#2a5d50" stopOpacity={1} />
                                <stop offset={off} stopColor="#65363e" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#f45656" fill="url(#splitColor)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>      
                    <div className={cx('bd-ac')}>
                        <ResponsiveContainer width="100%" height={110}>
                            <AreaChart
                            width={500}
                            height={110}
                            data={data1}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#fff' }} />
                            <YAxis tick={{ fontSize: 12, fill: '#fff' }} />
                            <Tooltip />
                            <defs>
                                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="#2a5d50" stopOpacity={1} />
                                <stop offset={off} stopColor="#65363e" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#f45656" fill="url(#splitColor)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>      
                    
                    <div className={cx('bd-ac')}>
                        <ResponsiveContainer width="100%" height={450}>
                            <Treemap
                            width={400}
                            height={450}
                            data={data2}
                            dataKey="size"
                            stroke="#fff"
                            fill="#8884d8"
                            content={<CustomizedContent colors={COLORS} />}
                            />
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            {/* bl2 */}
            <div className={cx('ite-blc2')}> 
                <div className={cx('tab1')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1','tab1-tt2')}>
                            Biểu đồ tương quan luận chuyển - RRG
                        </div>
                        <div className={cx('tab1-title2','tab-pin')}>
                            <span className={cx('ic-pin')}><img src={images.ipin} alt="images" /></span>
                        </div>
                    </div>
                    <div className={cx('tab1-table', 'blc2-bd')}>
                        <span>6 ngày kết thúc vào 05/04/2024 lúc 15:00</span>
                        <div className={cx('charli')}>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#5cace2" />
                                    <Line type="monotone" dataKey="uv" stroke="#2ecc71" />
                                    <Customized component={CustomizedCross} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={cx('rd','watch')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Xem tất cả</span>
                    </div>
                </div>
                <div className={cx('tab1','tab2')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1','tab1-tt2')}>
                            Top mạnh nhất trong 1 tháng qua
                        </div>
                        <div className={cx('tab1-title2')}>
                            <div className={cx('fil-ler')}>
                                <span className={cx('ico-fil')}><img src={images.ifl} alt="images" /></span>
                                <span>Lọc</span>
                            </div>
                        </div>
                        <div className={cx('tab1-title2')}>
                            <span className={cx('ic-pin1')}><img src={images.ipin1} alt="images" /></span>
                        </div>
                    </div>
                    <div className={cx('lay')}>
                       
                        <div className={cx('lo-1')}>
                            {
                                top1Lists.map((item, index) => (
                                    <div key={index} className={cx('lo1-1')} style={{ backgroundColor: item.color }}>
                                        <div className={cx('lo1-2')} style={{ backgroundColor: item.colo }}>
                                            {item.na}
                                        </div>
                                        <div className={cx('lo1-2','lo2')} style={{ backgroundColor: item.colo }}>
                                            {item.nu}
                                        </div>
                                    </div>
                                ))
                            }  
                        </div>
                    
                        <div className={cx('lo-2')}>
                            {
                                top2Lists.map((item, index) => (
                                    <div key={index} className={cx('lo1-1')} style={{ backgroundColor: item.color }}>
                                        <div className={cx('lo1-2')}>
                                            {item.na}
                                        </div>
                                        <div className={cx('lo1-2','lo2')}>
                                            {item.nu}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className={cx('rd','watch')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Xem tất cả</span>
                    </div>
                </div>

                <div className={cx('tab1','tab2')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1')}>
                            Top tăng trưởng EPS <span className={cx('col-hsx')}>(HSX)</span>
                        </div>
                        <div className={cx('tab1-title2','t1-tt')}>
                            <div className={cx('fil-ler')}>
                                <span className={cx('ico-fil')}><img src={images.ifl} alt="images" /></span>
                                <span>Lọc</span>
                            </div>
                        </div>
                        <div className={cx('tab1-title2')}>
                            <span className={cx('ic-pin1')}><img src={images.ipin1} alt="images" /></span>
                        </div>
                    </div>
                    <div className={cx('lay-o2')}>
                        <ResponsiveContainer width="100%" height={180}>
                            <BarChart
                            width={500}
                            height={180}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#ffa758" activeBar={<Rectangle fill="#ffa758" stroke="#ffa758" />} />
                            <Bar dataKey="uv" fill="#3cdc96" activeBar={<Rectangle fill="#3cdc96" stroke="#3cdc96" />} />
                            <Bar dataKey="amt" fill="#ff5858" activeBar={<Rectangle fill="#ff5858" stroke="#ff5858" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={cx('rd','watch')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Xem tất cả</span>
                    </div>
                </div>

                <div className={cx('tab1','tab2')}>
                    <div className={cx('top-3')}>
                        <div className={cx('tab1-title1','tt3')}>
                            Top thu nhập cổ tức (Năm gần nhất)
                        </div>
                        <div className={cx('tab1-title2')}>
                            <div className={cx('fil-ler','filer1')}>
                                <span className={cx('ico-fil')}><img src={images.ifl} alt="images" /></span>
                                <span>Lọc</span>
                            </div>
                        </div>
                        <div className={cx('tab1-title2')}>
                            <span className={cx('ic-pin1')}><img src={images.ipin1} alt="images" /></span>
                        </div>
                    </div>
                    <div className={cx('lay-o2')}>
                        <ResponsiveContainer width="100%" height={180}>
                            <BarChart
                            width={500}
                            height={180}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#ffa758" activeBar={<Rectangle fill="#ffa758" stroke="#ffa758" />} />
                            <Bar dataKey="uv" fill="#3cdc96" activeBar={<Rectangle fill="#3cdc96" stroke="#3cdc96" />} />
                            <Bar dataKey="amt" fill="#ff5858" activeBar={<Rectangle fill="#ff5858" stroke="#ff5858" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={cx('rd','watch')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Xem tất cả</span>
                    </div>
                </div>
            </div>
            {/* bl3 */}
            <div className={cx('ite-blc3')}>
                <div className={cx('ite1-blc3')}>
                    <div className={cx('noti')}>
                        <div className={cx('volu')}>
                            <div className={cx('bd3','vl3')}>
                                <span className={cx('iv5')}><img src={images.inoti} alt="images" /></span>
                            </div>
                            <div className={cx('blx')}></div>
                            <div className={cx('vl-tag')}>
                                <div className={cx('vl-title')}>
                                    {currentItem.tt}
                                </div>
                                <div className={cx('by-at')}>
                                    <span>
                                        {currentItem.by}
                                    </span>
                                    <span>
                                        {currentItem.at}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blx','bl-volu')}></div>
                        <div className={cx('vl-page')}>
                            <div className={cx('vl-ind')}>{currentItem.id}/4</div>
                            <div className={cx('vl-line')}></div>
                            <div className={cx('icon-vl')}>
                                <span className={cx('vl-ic1')} onClick={handlePrev}><img src={images.ima7} alt="images" /></span>
                                <span className={cx('vl-ic2')} onClick={handleNext}><img src={images.ima7} alt="images" /></span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('vl-content')}>
                        {renderContent()}
                        <div className={cx('dotted-line')}></div>
                    </div>
                    <div className={cx('rd','watch','wat3')}>
                        <span className={cx('i6')}><img src={images.ima6} alt="images" /></span>
                        <span>Chi tiết</span>
                    </div>
                </div>
                <div className={cx('ite2-blc3')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1','tab1-tt2')}>
                            FData Pro
                        </div>
                    </div>
                    <div className={cx('tab1-table', 'blc2-bd')}>
                        <span className={cx('im-ifd')}><img src={images.ifd} alt="images" /></span>
                    </div>
                </div>

                <div className={cx('tab1','ite3-bl3')}>
                    <div className={cx('tab1-title')}>
                        <div className={cx('tab1-title1')}>
                           Thế Giới
                        </div>
                        <div className={cx('tab1-title2')}>
                           Việt Nam 
                        </div>
                        <div className={cx('tab1-title2')}>
                           Hàng Hóa
                        </div>
                        <div className={cx('tab1-title2')}>
                           Crypto
                        </div>
                        <div className={cx('tab1-title2')}>
                           <span className={cx('ic-bc')}><img src={images.ibc} alt="images" /></span>
                        </div>
                    </div>
                    <div className={cx('tb-nati')}>
                        <div className={cx('tb-na','tb-na1')}>1d</div>
                        <div className={cx('tb-na')}>1w</div>
                        <div className={cx('tb-na')}>1m</div>
                        <div className={cx('tb-na')}>6m</div>
                        <div className={cx('tb-na')}>1y</div>
                        <div className={cx('tb-na')}>max</div>
                    </div>
                    <div className={cx('bd-ac')}>
                        <ResponsiveContainer width="100%" height={135}>
                            <AreaChart
                                width={500}
                                height={200}
                                data={data}
                                syncId="anyId"
                                margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" hide />
                                <YAxis tick={{ fontSize: 12, fill: '#fff' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#39c388" fill="#2b5d50" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>      
                    <div className={cx('tb-nati','th-tb3')}>
                        <div className={cx('tb-na')}>10:01</div>
                        <div className={cx('tb-na')}>12.00</div>
                        <div className={cx('tb-na')}>15.01</div>
                    </div>
                    <div className={cx('tab1-table','tb3-tb')}>
                        <table>
                            <tbody>
                            <div className={cx('scro-nati')}>
                                {nationLists.map((item, index) => {
                                    const randomNumber = parseFloat(randomDecis[index]);
                                    const sign = index < 4 ? '+' : '-';
                                    return (
                                        <tr key={index} className={cx('alternate-row')}>
                                            <td>
                                                <span className={cx('ic-nation')}><img src={item.im} alt="images" /></span>
                                                <span className={cx('it-list')}>{item.na}</span>
                                            </td>
                                            <td>{randomDecimals[index]}</td>
                                            <td>
                                                {`${sign}${randomDecimals[index]} / ${sign}${Math.abs(randomNumber)}%`}
                                            </td>
                                            <td>
                                                <span className={cx('ic-time')}><img src={images.ict} alt="images" /></span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </div>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </main>
}

export default Home;