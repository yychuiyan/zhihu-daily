import React, { useMemo } from 'react';
import './HomeHead.less';
const image = require('../assets/avatar.webp');
const HomeHead = props => {
  // 计算时间中的月和日
  let { today } = props;
  let time = useMemo(() => {
    // 处理数据
    let [, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/),
      area = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    return {
      month: area[+month] + '月',
      day,
    };
  }, [today]);
  return (
    <header className="home_head_box">
      <div className="info">
        <div className="time">
          <span>{time.day}</span>
          <span>{time.month}</span>
        </div>
        <h2 className="title">知乎日报</h2>
      </div>
      <div className="picture">
        <img src={image} alt="" />
      </div>
    </header>
  );
};

export default HomeHead;
