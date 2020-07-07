var electron = require("electron");

const { app, BrowserWindow } = electron;

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      // 开启node
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
    },
  });

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
  });
});
