const {
  app,
  BrowserWindow,
  globalShortcut,
  shell,
  dialog,
} = require("electron");

let mainWin = null;

app.on("ready", () => {
  // 注册一个快捷键
  const baidu = globalShortcut.register("CommandOrControl+B", () => {
    // console.log("打开百度");
    shell.openExternal("http://www.baidu.com");
  });

  // 退出应用
  const quit = globalShortcut.register("CommandOrControl+W", () => {
    dialog
      .showMessageBox({
        type: "info",
        title: "退出应用?",
        message: "您要离开demo12吗？",
        // 按钮
        buttons: ["确定", "取消"],
        // 默认选中的按钮索引号
        defaultId: 1,
        // 取消按钮索引号
        cancelId: 1,
        checkboxChecked: false,
        checkboxLabel: "下次弹出不再提醒",
      })
      .then((result) => {
        // console.log(result);

        const { response, checkboxChecked } = result;
        if (response === 0) {
          // 退出应用
          mainWin = null;
          app.quit();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // 检查快捷键是否注册成功
  const isBaidu = globalShortcut.isRegistered("CommandOrControl+B");
  console.log(`register status:${isBaidu}`);

  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
  });
});

// app退出
app.on("will-quit", () => {
  // 注销快捷键(单个)
  globalShortcut.unregister("CommandOrControl+B");

  // 注销所有快捷键
  globalShortcut.unregisterAll();
});

app.setName("Electron-Demo");
