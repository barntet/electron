// 通过链接打开浏览器
const { shell } = require('electron');

const aHref = document.getElementById('aHref');

aHref.onclick = (e)=>{
    // 阻止默认事件 因为默认是在应用中打开;
    e.preventDefault();
    // 获取链接
    const href = aHref.getAttribute('href');
    // 浏览器中打开
    shell.openExternal(href)
}