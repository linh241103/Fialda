import React from 'react';
import { ColumnSizer, Grid, AutoSizer, WindowScroller } from 'react-virtualized';
import styles from './PriceList.module.scss';
import classNames from "classnames/bind";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PriceList() {
  const [items, setItems] = useState([]);
  const [randomColors, setRandomColors] = useState([]);
  const [activeButton, setActiveButton] = useState('btn1');
  const [disPlay, setDisplay] = useState(false);
  const [logCate, setLogCate] = useState(false);
  const [logMajor, setLogMajor] = useState(false);

  useEffect(()=>{
    setItems(
        [...Array(100).keys()].map((key) => {
            const randomNumber = Math.random();
            const fakeNumber =
            randomNumber < 0.5
              ? (Math.floor(Math.random() * 100) + 1).toFixed(2)
              : parseFloat(faker.finance.amount(1, 100, 2)).toFixed(2);
            const fakeCode = faker.random.alphaNumeric(2).toUpperCase();
            const fakeDeci = parseFloat(faker.finance.amount(-1, 0, 2));
            return {
                id: key,
                price: fakeNumber,
                code: `A${fakeCode}`,
                deci: fakeDeci.toFixed(2),
            };
        })
    );

    const colors = ['#fefefe', '#3cdc96', '#cc4d50', '#f8ec02', '#c66bf7'];
    const generatedColors = [];
    for (let i = 0; i < 100; i++) {
      generatedColors.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    setRandomColors(generatedColors);

  },[]);

  const handleMxPxClick = () => {
    setDisplay(!disPlay);
  };

  const handleCateClick = () => {
    setLogCate(!logCate);
  };

  const handleMajorClick = () => {
    setLogMajor(!logMajor);
  };
  
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); 
  };
  const someCellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    let content;
    let textColor = 'black';
    let backgroundColor;

    if (columnIndex === 0) {
      textColor = randomColors[rowIndex];
    }
    else if (columnIndex === 1) {
      textColor = '#f8ec02';
    }
    else if (columnIndex === 2) {
      textColor = '#c66bf7';
    }
    else if (columnIndex === 3) {
      textColor = '#3cdc96';
    }
    else if (columnIndex === 4 || columnIndex === 24 || columnIndex === 25) {
      textColor = '#fefefe';
    } else {
      textColor = randomColors[rowIndex];
    }
    
    if (rowIndex % 2 === 0) {
      backgroundColor = '#232632';
    } else {
      backgroundColor = '#323643';
    }

    if (columnIndex === 0) {
      content = items[rowIndex].code;
    } else if (columnIndex === 13) {
      content = items[rowIndex].deci; 
    } else {
      content = items[rowIndex].price; 
    }

    if ((columnIndex >= 1 && columnIndex <= 3) || (columnIndex >= 11 && columnIndex <= 13) || (columnIndex >= 20 && columnIndex <= 23)) {
      if (rowIndex % 2 === 0) {
        backgroundColor = '#444651';
      } else {
        backgroundColor = '#51545f';
      }
    }

    const cellStyle = {
      ...style,
      color: textColor,
      backgroundColor: backgroundColor,
    };

    return (
      <div key={key} style={cellStyle} className={cx('cell')}>
        {content}
      </div>
    );
  };

  const headerRenderer2 = ({ columnIndex, key, style }) => {
    let content = '';
    let borderLeft = '';
    let borderRight = '';
    let borderTop = '';

    let backgroundColor;
    switch (columnIndex) {
      case 0:
        content = 'Mã';
        break;
      case 1:
        content = 'TC';
        break;
      case 2:
        content = 'Trần';
        break;
      case 3:
        content = 'Sàn';
        break;
      case 4:
        content = '<Tổng KL>';
        break;
      case 5:
        content = 'Giá 3';
        break;
      case 6:
        content = 'KL3';
        break;
      case 7:
        content = 'Giá 2';
        break;
      case 8:
        content = 'KL2';
        break;
      case 9:
        content = 'Giá 1';
        break;
      case 10:
        content = 'KL1';
        break;
      case 11:
        content = 'Giá';
        break;
      case 12:
        content = 'KL';
        break;
      case 13:
        content = '<+/->';
        break;
      case 14:
        content = 'Giá1';
        break;
      case 15:
        content = 'KL1';
        break;
      case 16:
        content = 'Giá 2';
        break;
      case 17:
        content = 'KL2';
        break;
      case 18:
        content = 'Giá 3';
        break;
      case 19:
        content = 'KL3';
        break;
      case 20:
        content = 'Mở';
        break;
      case 21:
        content = 'Cao';
        break;
      case 22:
        content = 'Thấp';
        break;
      case 23:
        content = 'TB';
        break;
      case 24:
        content = '<Mua';
        break;
      case 25:
        content = 'Bán>';
        break;
      default:
        break;
    }

    if ((columnIndex >= 1 && columnIndex <= 3) || (columnIndex >= 11 && columnIndex <= 13) || (columnIndex >= 20 && columnIndex <= 23)) {
      backgroundColor = '#4c4f5a';
      borderLeft = '1px solid #676973';
    }

    if (columnIndex >= 5 && columnIndex <= 10) {
      borderTop = '1px solid #232632';
      borderLeft = '1px solid #232632';
    }
    if (columnIndex === 10) {
      borderRight = '1px solid #232632';
    }

    if (columnIndex >= 14 && columnIndex <= 19) {
      borderTop = '1px solid #232632';
      borderLeft = '1px solid #232632';
    }
    if (columnIndex === 19) {
      borderRight = '1px solid #232632';
    }

    if (columnIndex === 24 || columnIndex === 25) {
      borderTop = '1px solid #232632';
    }

    const cellStyle = {
      ...style,
      borderLeft: borderLeft, 
      borderRight: borderRight, 
      borderTop: borderTop, 
      backgroundColor: backgroundColor,
    };

    return (
      <div key={key} style={cellStyle} className={cx('cell', 'header')}>
        {content}
      </div>
    );
  };

  const headerRenderer = ({ columnIndex, key, style }) => {
    let content = '';
    let borderLeft = '';
    let borderRight = '';
    let backgroundColor;

    if (columnIndex === 7) {
      content = 'Mua';
    } else if (columnIndex === 16) {
      content = 'Bán';
    } else if (columnIndex === 24) {
      content = 'Nước';
    } else if (columnIndex === 25) {
      content = 'Ngoài';
    } else {
      content = '';
    }

    if (columnIndex === 5) {
      borderLeft = '1px solid #232632';
    }
    if (columnIndex === 10) {
      borderRight = '1px solid #232632';
    }

    if (columnIndex === 14) {
      borderLeft = '1px solid #232632';
    }
    if (columnIndex === 19) {
      borderRight = '1px solid #232632';
    }

    if ((columnIndex >= 1 && columnIndex <= 3) || (columnIndex >= 11 && columnIndex <= 13) || (columnIndex >= 20 && columnIndex <= 23)) {
        backgroundColor = '#4c4f5a';
        borderLeft = '1px solid #676973';
    }

    const cellStyle = {
      ...style,
      borderLeft: borderLeft, 
      borderRight: borderRight, 
      backgroundColor: backgroundColor,
    };
    return (
      <div key={key} style={cellStyle} className={cx('cell', 'header')}>
        {content}
      </div>
    );
  };

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

  return (
    <div className={cx('wrapper')}>
      <div className={cx('fil')}>
        <div></div>
        <div className={cx('fil2')}>
            <div className={cx('label')}>Lọc theo:</div>
            <div className={cx('list-e')}>
              <button type='submit' 
                className={cx('btn-mini','btd', activeButton === 'btn1' ? 'active' : '')}
                onClick={() => handleButtonClick('btn1')}
                >
                <span>Tất cả sàn</span>
              </button>
              <button type='submit' 
                className={cx('btn-mini','bt-mi', activeButton === 'btn2' ? 'active' : '')}
                onClick={() => handleButtonClick('btn2')}
              >
                <span>HSX</span>
              </button>
              <button type='submit' 
                className={cx('btn-mini','bt-mi', activeButton === 'btn3' ? 'active' : '')}
                onClick={() => handleButtonClick('btn3')}
                >
                <span>HNX</span>
              </button>
              <button type='submit' 
                className={cx('btn-mini','bt-mi', activeButton === 'btn4' ? 'active' : '')}
                onClick={() => handleButtonClick('btn4')}
                >
                <span>UPCOM</span>
              </button>
              <button type='submit' className={cx('btn-mini','bt-mi')} onClick={handleMajorClick}>
                <span>Ngành</span>
                <span className={cx('ex')}><img src={images.ima7} alt="images" /></span>
              </button>
              <button type='submit' className={cx('btn-mini','bt-mi', 'btc')} onClick={handleCateClick}>
                <span>Danh mục</span>
                <span className={cx('ex')}><img src={images.ima7} alt="images" /></span>
              </button>
            </div>

            <div className={cx('mx-px')} onClick={handleMxPxClick}>
              <span><img src={images.ifi1} alt="images" /></span>
            </div>
        </div>
      </div>

      <div className={cx('major', { 'show3': logMajor })}>
        <div className={cx('major-i')}>
          <span>
            <input placeholder="Tìm kiếm" className={cx('ant-input')} type="text" value="" />
            <span><img src={images.icon2} alt="images" /></span>
          </span>
        </div>
        <div className={cx('major-l')}>
          <ul>
            {majorLists.map((item, index) => (
              <li key={index}>
                <span><img src={images.iadd} alt="images" /></span>
                <span className={cx('it-list')}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx('lg', { 'show1': logCate })}>
        <div className={cx('lg1')}>
            Đăng nhập để sử dụng chức năng
        </div>
        <div>
            <button className={cx('btn-log')}>
                <span className={cx('sgn')}>Đăng nhập</span>
                <span className={cx('il5')}><img src={images.icu} alt="images" /></span>
            </button>
        </div>
      </div>

      <div className={cx('dipl', { 'show': disPlay })}>
        <div className={cx('dipl1')}>
          <span>Giao diện</span>
        </div>
        <div className={cx('dipl2')}>
          <button type='submit' className={cx('btn-dip','bt-d1')}>
            <span>Tự động</span>
          </button>
          <button type='submit' className={cx('btn-dip')}>
            <span>Nền sáng</span>
          </button>
          <button type='submit' className={cx('btn-dip','bt-d3')}>
            <span>Nền tối</span>
          </button>
        </div>
      </div>
    
        <div className={cx('table')}>
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <AutoSizer disableHeight>
                {({width}) => (
                  <ColumnSizer
                    columnMaxWidth={100}
                    columnMinWidth={30}
                    columnCount={26}
                    width={width}
                  >
                    {({adjustedWidth, getColumnWidth, registerChild}) => (
                      <div className={cx('GridContainer')}>
                        <Grid
                          ref={registerChild}
                          columnWidth={getColumnWidth}
                          columnCount={26}
                          height={25}
                          cellRenderer={headerRenderer}
                          rowHeight={25}
                          rowCount={1}
                          width={adjustedWidth}
                          autoHeight
                          style={{ position: 'sticky', top: 60, zIndex: 1 }}
                          className={cx('grid1')}
                        />
                         <Grid
                          ref={registerChild}
                          columnWidth={getColumnWidth}
                          columnCount={26}
                          height={25}
                          cellRenderer={headerRenderer2}
                          rowHeight={25}
                          rowCount={1}
                          width={adjustedWidth}
                          autoHeight
                          style={{ position: 'sticky', top: 85, zIndex: 2 }}
                          className={cx('grid2')}
                        />
                        <Grid
                          autoHeight
                          ref={registerChild}
                          columnWidth={getColumnWidth}
                          columnCount={26}
                          height={height}
                          cellRenderer={someCellRenderer}
                          rowHeight={25}
                          rowCount={items.length}
                          width={adjustedWidth}
                          isScrolling={isScrolling}
                          onScroll={onChildScroll}
                          scrollTop={scrollTop}
                          className={cx('grid3')}
                        />
                      </div>
                    )}
                  </ColumnSizer>
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        </div>
    </div>
  );
}

export default PriceList;
