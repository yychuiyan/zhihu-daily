import http from "./http";

// 获取进入新闻信息&轮播图信息
const queryNewsLatest = () => {
  return http.get('/news_latest');
}
// 获取往日新闻信息
const queryNewsBefore = (time) => {
  return http.get('/api/news_before', {
    params: {
      time
    }
  })
}
// 获取新闻详细信息
const queryNewsInfo = (id) => {
  return http.get('/api/news_info', {
    params: {
      id
    }
  })
}
// 获取新闻点赞信息
const queryStoryExtra = (id) => {
  return http.get('/api/news_extra', {
    params: {
      id
    }
  })
}

// 暴露api
const api = {
  queryNewsLatest,
  queryNewsBefore,
  queryNewsInfo,
  queryStoryExtra
}

export default api;
