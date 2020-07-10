const { app, BrowserWindow } = require("electron");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  require("./main/menu.js");
  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
  });
});
