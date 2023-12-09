// 路由懒加载
import { lazy } from 'react';
// 默认展示首页 打包到js中
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 浏览器标签显示内容
    meta: {
      title: '首页-知乎日报',
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('../views/Detail')),
    // 浏览器标签显示内容
    meta: {
      title: '新闻详情-知乎日报',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('../views/Personal')),
    // 浏览器标签显示内容
    meta: {
      title: '个人中心-知乎日报',
    },
  },
  {
    path: '/store',
    name: 'store',
    component: lazy(() => import('../views/Store')),
    // 浏览器标签显示内容
    meta: {
      title: '我的收藏-知乎日报',
    },
  },
  {
    path: '/update',
    name: 'update',
    component: lazy(() => import('../views/Update')),
    // 浏览器标签显示内容
    meta: {
      title: '修改个人信息-知乎日报',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../views/Login')),
    // 浏览器标签显示内容
    meta: {
      title: '登录注册-知乎日报',
    },
  },
  {
    path: '*',
    name: '404',
    component: lazy(() => import('../views/Page404')),
    // 浏览器标签显示内容
    meta: {
      title: '404页面-知乎日报',
    },
  },
];

export default routes;
