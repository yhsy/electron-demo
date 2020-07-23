const { app, BrowserWindow } = require("electron");

let mainWin = null;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWin.loadFile("index.html");

  mainWin.on("closed", () => {
    mainWin = null;
    app.quit();
  });
});

app.on("will-quit", () => {
  app.quit();
});
