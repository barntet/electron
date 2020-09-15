const { Menu, BrowserWindow } = require("electron");

const temlpate = [
  {
    label: "第一项",
    submenu: [
      {
        label: "1.1",
        accelerator:`ctrl+n`,
        click: () => {
          let win = new BrowserWindow({
            width: 300,
            height: 300,
          });
          win.loadFile(require('path').join(__dirname,'../render/yellow.html'));
          win.on('close',()=>{
              win = null;
          })
        },
      },
      { label: "1.2" },
    ],
  },
  {
    label: "第二项",
    submenu: [{ label: "2.1" }, { label: "2.2" }],
  },
];

const menu = Menu.buildFromTemplate(temlpate);
Menu.setApplicationMenu(menu);
