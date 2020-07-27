const { app, BrowserWindow, shell, Menu } = require("electron");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: "./assets/icon/icon-logo.png",
    // 能否调节窗口大小(含最大化)
    // resizable: false,
    webPreferences: {
      nodeIntegration: true,
      // 启用webview标签(默认false)
      webviewTag: true,
      webSecurity: false,
    },
    center: true,
    // 默认先隐藏窗口
    show: false,
  });

  // 自定义菜单栏
  require("./main/teambition.js");

  mainWin.loadFile("index.html");

  // 初始化后再显示
  mainWin.on("ready-to-show", () => {
    mainWin.show();
  });

  mainWin.on("closed", () => {
    mainWin = null;
    app.quit();
  });
});
