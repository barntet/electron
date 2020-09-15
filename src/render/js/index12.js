// 剪切板
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const { clipboard } = require('electron');
btn.onclick = ()=>{
    clipboard.writeText(message.innerHTML)
    alert('复制成功')
}