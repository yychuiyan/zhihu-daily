## 技术栈
- React 18
- Redux
- react-router-dom v6
- Fetch
- Less AntdMobile

## 搭建

```bash

$ npm i create-react-app -g
$ create-react-app 项目名
$ yarn eject 暴露webpack配置项，修改脚手架默认配置

```
### 路由搭建
> 7个页面：首页，个人中心，详情页，登录注册，收藏，修改个人中心，404

### 页面搭建
组件抽离封装的思路：
1. 公用的：善于发现公用性的眼镜、思想
2. 一个页面内容较多，代码全写在一起后不方便维护，可以将其拆成几个部分。
