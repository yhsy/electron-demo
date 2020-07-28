const { app, BrowserWindow, shell, Menu, ipcMain } = require("electron");

let mainWin = null;

app.on("ready", createWindow);

// 默认主窗口
function createWindow() {
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

  // 创建菜单栏(自定义)
  createMenu();

  mainWin.loadFile("index.html");

  // 初始化后再显示
  mainWin.on("ready-to-show", () => {
    mainWin.show();
  });

  mainWin.on("closed", () => {
    mainWin = null;
    app.quit();
  });
}

// 自定义菜单
function createMenu() {
  const menuTemplate = [
    {
      label: "文件",
      submenu: [
        {
          label: "偏好设置",
          accelerator: "ctrl + ,",
          icon: "./assets/icon/icon-setting.png",
          enabled: false,
        },
        // 分割线
        {
          type: "separator",
        },
        {
          label: "退出",
          accelerator: "ctrl + Q",
          role: "quit",
          icon: "./assets/icon/icon-logout.png",
        },
      ],
    },
    {
      label: "修改",
      submenu: [
        {
          label: "撤销",
          role: "undo",
        },
        {
          label: "重做",
          role: "redo",
        },
        // 分割线
        {
          type: "separator",
        },
        {
          label: "剪切",
          role: "cut",
        },
        {
          label: "复制",
          role: "copy",
        },
        {
          label: "粘贴",
          role: "paste",
        },
        {
          label: "粘贴并匹配样式",
          role: "pasteAndMatchStyle",
        },
        {
          label: "全选",
          role: "selectAll",
        },
      ],
    },
    {
      label: "视图",
      submenu: [
        {
          label: "停止",
          enabled: false,
        },
        {
          label: "重新加载",
          role: "reload",
          accelerator: "ctrl + R",
        },
        // 分割线
        {
          type: "separator",
        },
        {
          label: "放大",
          role: "zoomin",
          accelerator: "ctrl + =",
        },
        {
          label: "缩小",
          role: "zoomout",
          accelerator: "ctrl + -",
        },
        {
          label: "重置",
          role: "resetzoom",
          accelerator: "ctrl + O",
        },
        // 分割线
        {
          type: "separator",
        },
        {
          label: "切换全屏",
          role: "togglefullscreen",
          accelerator: "ctrl + shift + F",
        },
      ],
    },
    {
      label: "帮助",
      submenu: [
        {
          label: "隐藏菜单栏",
          icon: "./assets/icon/icon-hide.png",
          accelerator: "ctrl + shift + H",
          click: () => {
            // 隐藏会闪退窗口(bug)
            // Menu.setApplicationMenu(null);
            mainWin.webContents.send("status", 0);
          },
          // enabled: false,
        },
        {
          label: "网络自助测试",
          icon: "./assets/icon/icon-network.png",
          click: () => {
            let helpWin = null;
            helpWin = new BrowserWindow({
              width: 1000,
              height: 800,
              webPreferences: {
                nodeIntegration: true,
              },
            });
            // 加载远程URL
            helpWin.loadURL("https://help.teambition.com/");

            helpWin.on("closed", () => {
              helpWin = null;
            });
          },
        },
        {
          label: "检查版本",
          icon: "./assets/icon/icon-update.png",
          click: () => {
            dialog.showMessageBox({
              type: "info",
              title: "Teambition",
              message: "目前版本是V1.13,没有找到新版本",
            });
          },
        },
        // 分割线
        {
          type: "separator",
        },
        {
          label: "更新日志",
          icon: "./assets/icon/icon-log.png",
          click: () => {
            shell.openExternal(
              "https://dn-st.teambition.net/windows/zh/changelog.html"
            );
          },
        },
        {
          label: "调试工具",
          icon: "./assets/icon/icon-dev.png",
          role: "toggledevtools",
        },
      ],
    },
  ];

  const tembitionMenu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(tembitionMenu);
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// 当应用被激活时(首次启动,任务栏点击图标,)
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// 渲染进程通信(显示菜单栏)
ipcMain.on("ipcStatus", (event, args) => {
  // console.log(args);
  if (args) {
    createMenu();
  }
});
