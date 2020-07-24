# electron-demo

## 一、入门 Demo

### 1.demo1-Hello,world

- 进入目录: `cd demo1`
- 安装依赖(建议用 cnpm): `cnpm install`
- 启动项目: `npm run dev`
- 图示
  ![demo1](http://7n.jsyu.vip/demo1.png)

### 2.demo2-邀请小姐姐

![demo2](http://7n.jsyu.vip/demo2.png)

### 3.demo3-打开新窗口 (remote)

![demo3](http://7n.jsyu.vip/demo3.png)

### 4.demo4-自定义菜单栏

![demo4](http://7n.jsyu.vip/demo4-2.png)

![demo4](http://7n.jsyu.vip/demo4.png)

- 更新:仿 Tembition 菜单栏(菜单项有 icon 图标,禁用菜单,打开网页,打开提示窗,菜单分隔线,隐藏菜单栏功能),右键菜单(显示/隐藏菜单栏)
- 未解决问题: 快捷键(ctrl+ +,ctrl+ ,)

### 5.demo5-自定义右键菜单

![demo5](http://7n.jsyu.vip/demo5.png)

- 新增(electron-packager 打包配置)

### 6.demo6-嵌入页面(Teambition 登录页,拉伸自动调整嵌入页面位置)

![demo6](http://7n.jsyu.vip/demo6.png)

### 7.demo7-打开子窗口及父子窗口通信

![demo7](http://7n.jsyu.vip/demo7.png)

### 8.demo8-选择文件对话框(选择图片并插入)

![demo8](http://7n.jsyu.vip/demo8.png)
![demo8](http://7n.jsyu.vip/demo8-2.jpg)

### 9.demo9-保存文件对话框(保存网页)

![demo9](http://7n.jsyu.vip/demo9.png)

### 10.demo10-断网/联网 提醒

- 断网和联网要通过网络设置才能看到
  ![demo10-1](http://7n.jsyu.vip/demo10-1.png)
  ![demo10-2](http://7n.jsyu.vip/demo10-2.png)

### 11.demo11-底部消息通知

![demo11](http://7n.jsyu.vip/demo11.png)

### 12.demo12-注册全局快捷键(退出应用)

![demo12](http://7n.jsyu.vip/demo12.png)

### 13.demo13-剪贴板的使用(复制文本、复制图片、复制 html)

![demo13](http://7n.jsyu.vip/demo13.png)

### 14.demo14-打包应用

- 1.进入目录,命令：`cd demo14`
- 2.安装依赖: 命令：`npm i`
- 3.本地运行: 命令: `npm run dev`,这里要修改下`main.js`里的 icon 路径，不然弹出提示
- 4.打包所有平台,命令: `npm run build`
- 5.打包 win 平台,命令: `npm run build-win`
- 6.第一次打包慢问题，解决方案(改成国内镜像源)：`npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/`

## 二、推荐学习教程

### 1. [《Electron 免费视频教程-用前端技术开发桌面应用》](https://jspang.com/detailed?id=62)

### 2. [Electron 官方文档](http://www.electronjs.org/docs)
