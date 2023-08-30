import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router';
// 页面入口
const App = () => {
  return (
    <HashRouter>
      <RouterView />
    </HashRouter>
  );
};

export default App;
