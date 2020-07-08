const { BrowserWindow } = require("electron").remote;
const btnNewWin = this.document.querySelector("#btnNewWin");

window.onload = function () {
  btnNewWin.addEventListener("click", () => {
    let newWin = new BrowserWindow({
      width: 400,
      height: 400,
      webPreferences: {
        // 开启node
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
      },
    });
    newWin.loadFile("renderer/new.html");

    newWin.on("closed", () => {
      newWin = null;
    });
  });
};
