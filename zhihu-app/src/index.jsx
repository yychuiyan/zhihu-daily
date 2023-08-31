import React from 'react';
import ReactDOM from 'react-dom/client';
// REDUX
import { Provider } from 'react-redux'
import store from './store';
// Antd-Mobile
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
 // rem转换
import 'lib-flexible';
// 样式
import './index.less';
// 入口文件
import App from './App';
// 处理页面最大宽度
(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById('root'),
      size = parseFloat(html.style.fontSize);
    root.style.maxWidth = '750px';
    if (size >= 75) {
      html.style.fontSize = '75px';
    }
  };
  handleMax();
  window.addEventListener('resize', handleMax);
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
// 程序打包入口
root.render(
  <ConfigProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
