window.onload = () => {
  const { remote } = require("electron");
  const { Menu, BrowserWindow, shell, dialog, BrwoserView } = remote;
  var onOff = true;

  let rightTemplateHide = [
    {
      label: "返回",
      enabled: false,
    },
    {
      label: "前进",
      enabled: false,
    },
    {
      label: "重新加载",
      role: "reload",
    },
    {
      label: "隐藏菜单栏",
      click: () => {
        onOff = false;
        Menu.setApplicationMenu(null);
      },
    },
  ];

  let rightTemplateShow = [
    {
      label: "返回",
      enabled: false,
    },
    {
      label: "前进",
      enabled: false,
    },
    {
      label: "重新加载",
      role: "reload",
    },
    {
      label: "显示菜单栏",
      click: () => {
        onOff = true;
        const menuTemplate = [
          {
            label: "文件",
            submenu: [
              {
                label: "偏好设置",
                accelerator: "ctrl + ,",
                icon: "./icon/icon-setting.png",
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
                icon: "./icon/icon-logout.png",
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
                icon: "./icon/icon-hide.png",
                accelerator: "ctrl + shift + H",
                click: () => {
                  onOff = false;
                  Menu.setApplicationMenu(null);
                },
                // enabled: false,
              },
              {
                label: "网络自助测试",
                // enabled: false,
                icon: "./icon/icon-network.png",
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
                icon: "./icon/icon-update.png",
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
                icon: "./icon/icon-log.png",
                click: () => {
                  shell.openExternal(
                    "https://dn-st.teambition.net/windows/zh/changelog.html"
                  );
                },
              },
              {
                label: "调试工具",
                icon: "./icon/icon-dev.png",
                role: "toggledevtools",
              },
            ],
          },
        ];

        const tembitionMenu = Menu.buildFromTemplate(menuTemplate);

        Menu.setApplicationMenu(tembitionMenu);
      },
    },
  ];

  // 生成菜单
  let rightMenuHide = Menu.buildFromTemplate(rightTemplateHide);
  let rightMenuShow = Menu.buildFromTemplate(rightTemplateShow);

  // 监听鼠标右击事件
  window.addEventListener("contextmenu", function (e) {
    // alert('111')
    // 阻止默认事件
    e.preventDefault();
    if (onOff) {
      //把菜单模板添加到右键菜单
      rightMenuHide.popup({
        window: remote.getCurrentWindow(),
      });
    } else {
      //把菜单模板添加到右键菜单
      rightMenuShow.popup({
        window: remote.getCurrentWindow(),
      });
    }
  });
};
