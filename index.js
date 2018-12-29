const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
