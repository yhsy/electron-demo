// 引入Electron
var electron = require("electron");

// 引入Main Process模块(主进程模块) app 和 BrowserWindow
// app: 控制应用程序的事件生命周期
// BrowserWindow: 创建和控制浏览器窗口。
const { app, BrowserWindow } = electron;

// 应用窗口
var mainWin = null;

app.on("ready", () => {
  // 创建浏览器窗口-宽高设置为800
  mainWin = new BrowserWindow({
    width: 800,
    height: 800,
  });

  // 载入页面文件
  mainWin.loadFile("index.html");
});
