const { app, BrowserWindow } = require("electron");

mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    // 本地测试,用的icon路径
    // icon: "./assets/icon/icon-logo.png",
    // 打包时,要用下面的路径
    icon: "./resources/app/assets/icon/icon-logo.png",

    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
    app.quit();
  });
});
