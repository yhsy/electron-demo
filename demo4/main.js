const { app, BrowserWindow } = require("electron");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    title: "Tembition | 团队协作工具领导者",
    icon: "./icon/icon-logo2.png",
  });

  // require('./main/menu.js')
  require("./main/teambition.js");

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
  });
});
