import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/reset.min.css';
import 'lib-flexible'; // rem转换
import './index.less';
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
root.render(
  <>
    <div className="box">React项目</div>
  </>
);
