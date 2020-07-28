const { ipcRenderer } = require("electron");
const { Menu } = require("electron").remote;

window.onload = () => {
  const webview = document.querySelector("webview");
  const mask = document.querySelector(".m-mask");
  const btnHideMenu = document.querySelector("#btnHideMenu");
  const btnShowMenu = document.querySelector("#btnShowMenu");

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

  // 隐藏菜单栏
  btnHideMenu.addEventListener("click", () => {
    Menu.setApplicationMenu(null);
  });

  // 显示菜单栏
  btnShowMenu.addEventListener("click", () => {
    // 发送消息给主进程
    ipcRenderer.send("ipcStatus", 1);
  });

  // 接收主进程消息(隐藏菜单栏)
  ipcRenderer.on("status", (event, args) => {
    // console.log("主进程消息收到了！");
    // console.log(args);
    if (!args) {
      Menu.setApplicationMenu(null);
    }
  });
};
