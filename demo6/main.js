const { app, BrowserWindow, BrowserView } = require("electron");
const { alert } = require("globalthis/implementation");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // devTools: true,
      nodeIntegration: true,
    },
  });
  // 新建一个嵌入页面
  let viewWin = new BrowserView();

  mainWin.setBrowserView(viewWin);

  // 设置内嵌窗口大小
  viewWin.setBounds({
    x: 220,
    y: 0,
    width: 800,
    height: 1000,
  });
  // 设置自动调整(宽、高、横向、纵向)
  viewWin.setAutoResize({
    width: true,
    height: true,
  });
  // 嵌入页面
  viewWin.webContents.loadURL("https://account.teambition.com/login");
  //   viewWin.webContents.on("did-finish-load", () => {
  //     console.log("finish");
  //   });

  mainWin.on("closed", () => {
    mainWin = null;
  });
});
