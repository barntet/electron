// 复制粘贴
const { remote } = require('electron');

const rightTemplate = [
    {label:'粘贴'},
    {label:'复制'},
]
const menu = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu',(e)=>{
    // 阻止当前窗口默认事件
    e.preventDefault();
    //把菜单模板添加到右键菜单
    menu.popup({window:remote.getCurrentWindow()})
})