const { app, BrowserWindow } = require("electron");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
  });
});
