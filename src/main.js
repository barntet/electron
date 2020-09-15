const { app, BrowserWindow, BrowserView, globalShortcut } = require("electron");
let mainWindow = null;
require('./main/menu')

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  globalShortcut.register('ctrl+y',()=>{
    let isRegister = globalShortcut.isRegistered(`ctrl+y`)?'true':'false'
    console.log(isRegister)
    mainWindow.loadURL('https://www.baidu.com')
  })
  globalShortcut.register('ctrl+z',()=>{
    mainWindow.loadFile(require('path').join(__dirname, './render/index.html'))
  })
  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(require('path').join(__dirname, './render/index.html'));

  // const viewWindow = new BrowserView(); // 定义实例
  // mainWindow.setBrowserView(viewWindow); // 主窗口设置viewWindw可用
  // viewWindow.setBounds({x:0,y:150,width: 600,height:600});
  // viewWindow.webContents.loadURL('https://www.baidu.com')

  mainWindow.on("close", () => {
    mainWindow = null;
  });

});

// 注销快捷键

app.on('will-quie',()=>{
  globalShortcut.unregister('ctrl+y');
  globalShortcut.unregister('ctrl+z');
  globalShortcut.unregisterAll()

})
