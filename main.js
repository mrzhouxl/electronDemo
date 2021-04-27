var electron = require('electron')

var app = electron.app

var browerWindows = electron.BrowserWindow

var mainWindows = null //声明要打开的窗口

app.on('ready', () => {
  mainWindows = new browerWindows({
    width: 700,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule:true
    } //web里面使用node的东西
  })
  mainWindows.loadFile('index.html')
  mainWindows.on('closed', () => {
    mainWindows = null
  })
})