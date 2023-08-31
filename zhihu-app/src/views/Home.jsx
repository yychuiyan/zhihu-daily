import React, { useEffect, useState } from 'react';
import HomeHead from '../component/HomeHead';
import _ from '../assets/utils';
import './Home.less';
import { Swiper, Image } from 'antd-mobile';
import { Link } from 'react-router-dom';
import api from '../api';
const Home = () => {
  const [today, setToday] = useState(_.formatTime(null, '{0}{1}{2}')),
    [bannerData, setBannerData] = useState([]);
  // 渲染完毕后向服务器发送请求
  useEffect(() => {
    (async () => {
      try {
        let { date, stories, top_stories } = await api.queryNewsLatest();
        console.log('stories', stories);
        setToday(date);
        setBannerData(top_stories);
      } catch (_) {}
    })();
  }, []);
  return (
    <div className="home_box">
      {/* 头部 */}
      <HomeHead today={today} />
      {/* 轮播图 */}
      <div className="swiper_box">
        {bannerData.length > 0 ? (
          <Swiper loop autoplay>
            {bannerData.map(item => {
              let { id, image, title, hint } = item;
              return (
                <Swiper.Item key={id}>
                  <Link to={{ pathname: `/detail/${id}` }}>
                    <Image src={image} lazy />
                    <div className="desc">
                      <h3 className="title">{title}</h3>
                      <p className="author">{hint}</p>
                    </div>
                  </Link>
                </Swiper.Item>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
