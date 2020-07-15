window.onload = function () {
  const { BrowserWindow, BrowserView } = require("electron").remote;
  const btnWindow = document.querySelector("#btnWindow");
  const popCont = document.querySelector(".pop-cont");

  let webWin = null;

  btnWindow.addEventListener("click", () => {
    // window.open("https:/www.baidu.com");
    // 子窗口
    window.open("./renderer/popup.html");

    // BrowserView;
    // webWin = new BrowserWindow({
    //   width: 1260,
    //   height: 600,
    //   webPreferences: {
    //     nodeIntegration: true,
    //   },
    // });
    // let viewWin = new BrowserView();

    // webWin.setBrowserView(viewWin);
    // viewWin.setBounds({ x: 0, y: 0, width: 1260, height: 600 });
    // viewWin.setAutoResize({
    //   width: true,
    //   height: true,
    // });
    // viewWin.webContents.loadURL("https://www.baidu.com");
  });

  //   监听窗口的message事件
  window.addEventListener("message", (msg) => {
    console.log(JSON.stringify(msg));
    popCont.innerHTML = JSON.stringify(msg.data);
  });
};
