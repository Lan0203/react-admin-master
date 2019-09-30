# react-admin-master实现共享单车后台管理系统以及一些UI组件的封装

## 项目结构
```javascript
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   +--assets                               ---静态图片
|   +--carousel-img                         ---轮播的图片
|   +--gallery                              ---画廊的图片
|   --- index.html                          ---首页入口html文件
+-- script/
|   --- build.js                            ---项目打包配置  
|   --- start.js                            ---项目启动配置
|   --- test.js                             ---项目测试配置
|
+-- src/                                    ---核心代码目录  
|   +--axios                                ---封装的axios请求
|   +--components                           ---公共组件配置
|   |   +--BaseForm                         ---表单的封装
|   |   +--ETable                           ---Table封装
|   |   +--Footer                           ---底部组件
|   |   +--Header                           ---头部文件
|   |   +--NavLeft                          ---侧边栏组件
|   +-- config                              ---公用配置
|   |   +-- menu                            ---菜单 
|   +-- pages                               ---页面
|   |   +--city                             ---城市管理
|   |   +--echarts                          ---图表
|   |   +--form                             ---表单组件
|   |   +--home                             ---首页组件
|   |   +--login                            ---登录组件
|   |   +--map                              ---地图
|   |   +--nomach                           ---找不到路由
|   |   +--order                            ---订单详情页
|   |   +--permission                       ---权限
|   |   +--rich                             ---富文本
|   |   +--table                            ---table页
|   |   +--ui                               ---UI组件
|   |   +--user                             ---用户详情
|   |   |  
|   --- style                               ---组件公共样式文件
|   +-- utils                               ---工具的封装
--- package.json

```


## 项目地址
  https://github.com/Lan0203/react-admin-master

## 下载
  git conle https://github.com/Lan0203/react-admin-master.git

## 安装配置
  cd react-damin-master  
  yarn || npm install

## 启动
  yarn start    || npm start  