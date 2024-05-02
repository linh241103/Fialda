import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import classNames from "classnames/bind";
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const data = [
  {
    name: 'Page A',
    uv: 62,
    pv: 32,
    amt: 20,
  },
  {
    name: 'Page B',
    uv: 32,
    pv: 82,
    amt: 20,
  },
  {
    name: 'Page C',
    uv: 29,
    pv: 78,
    amt: 23,
  },
  {
    name: 'Page D',
    uv: 25,
    pv: 20,
    amt: 68,
  },
  {
    name: 'Page E',
    uv: 81,
    pv: 15,
    amt: 24,
  },
  {
    name: 'Page F',
    uv: 36,
    pv: 32,
    amt: 70,
  },
  {
    name: 'Page G',
    uv: 65,
    pv: 87,
    amt: 24,
  },
];

function Login() {
  return (
    <div>
      <div className={cx('it-char')}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Bar dataKey="pv" stackId="a" fill="#3cdc96" barSize={20} />
            <Bar dataKey="amt" stackId="a" fill="#ffa758" barSize={20} />
            <Bar dataKey="uv" stackId="a" fill="#ff5858" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={cx('table')}>
        {data.map((item, index) => (
          <div key={index} className={cx('table-row')}>
            <div className={cx('table-cell')}>
              <div className={cx('bar')} style={{ width: `${item.pv}px`, backgroundColor: '#3cdc96' }}></div>
            </div>
            <div className={cx('table-cell')}>
              <div className={cx('bar')} style={{ width: `${item.amt}px`, backgroundColor: '#ffa758' }}></div>
            </div>
            <div className={cx('table-cell')}>
              <div className={cx('bar')} style={{ width: `${item.uv}px`, backgroundColor: '#ff5858' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
