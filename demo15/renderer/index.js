const { ipcRenderer, remote } = require("electron");
const { Menu } = remote;

// Dom 选择器(复用)
const $ = (el) => {
  // console.log(id);
  return document.querySelector(el);
};

var onOff = true;

window.onload = () => {
  const webview = $("webview");
  const mask = $(".m-mask");
  // const btnHideMenu = $("#btnHideMenu");
  // const btnShowMenu = $("#btnShowMenu");
  // const btnBack = $("#btnBack");
  // const btnForward = $("#btnForward");

  // 右键菜单(隐藏菜单栏)
  let rightTemplateHide = [
    {
      label: "返回",
      // enabled: false,
      click: () => {
        if (webview.canGoBack()) {
          webview.goBack();
        } else {
          alert("不能返回");
        }
      },
    },
    {
      label: "前进",
      // enabled: false,
      click: () => {
        if (webview.canGoForward()) {
          webview.goForward();
        } else {
          alert("不能前进");
        }
      },
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
  // 右键菜单(显示菜单栏)
  let rightTemplateShow = [
    {
      label: "返回",
      // enabled: false,
      click: () => {
        if (webview.canGoBack()) {
          webview.goBack();
        } else {
          alert("不能返回");
        }
      },
    },
    {
      label: "前进",
      // enabled: false,
      click: () => {
        if (webview.canGoForward()) {
          webview.goForward();
        } else {
          alert("不能前进");
        }
      },
    },
    {
      label: "重新加载",
      role: "reload",
    },
    {
      label: "显示菜单栏",
      click: () => {
        onOff = true;
        // 发送消息给主进程
        ipcRenderer.send("ipcStatus", 1);
      },
    },
  ];

  // 生成右键菜单
  let rightMenuHide = Menu.buildFromTemplate(rightTemplateHide);
  let rightMenuShow = Menu.buildFromTemplate(rightTemplateShow);

  // 页面开始加载
  webview.addEventListener("did-start-loading", () => {
    // console.log("页面加载中……");
    console.log(`网页链接:${webview.getURL()}`);
  });

  // 页面加载成功
  webview.addEventListener("did-finish-load", () => {
    // console.log("页面加载成功！");
    mask.style.display = "none";
    // webview设置为可见
    webview.style.display = "inline-flex";
    // console.log(`网页链接:${webview.getURL()}`);
  });

  // 监听鼠标右击事件(注意:一定要放在页面加载成功里面)
  window.addEventListener("contextmenu", function (e) {
    console.log("监听右击事件");
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

  // 接收主进程消息(隐藏菜单栏)
  ipcRenderer.on("status", (event, args) => {
    // console.log("主进程消息收到了！");
    // console.log(args);
    if (!args) {
      Menu.setApplicationMenu(null);
    }
  });

  // // 隐藏菜单栏
  // btnHideMenu.addEventListener("click", () => {
  //   Menu.setApplicationMenu(null);
  // });

  // // 显示菜单栏
  // btnShowMenu.addEventListener("click", () => {
  //   // 发送消息给主进程
  //   ipcRenderer.send("ipcStatus", 1);
  // });

  // // 后退
  // btnBack.addEventListener("click", () => {
  //   // 判断能否后退
  //   if (webview.canGoBack()) {
  //     console.log("能后退");
  //     // $("#currentUrl").innerHTML = webview.getURL();
  //     webview.goBack();
  //   } else {
  //     console.log("不能后退");
  //     // $("#currentUrl").innerHTML = webview.getURL();
  //   }
  //   // console.log("后退");
  //   // webview.goBack();
  //   // console.log(`网页链接:${webview.getURL()}`);
  //   // const url = webview.getURL();
  // });

  // // 前进
  // btnForward.addEventListener("click", () => {
  //   // 判断能否前进
  //   if (webview.canGoForward()) {
  //     console.log("能前进");
  //     webview.goForward();
  //   } else {
  //     console.log("不能前进");
  //   }
  // });
};
