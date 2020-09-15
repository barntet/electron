// 子窗口发来信息
const btn = document.getElementById('btn');
btn.onclick = ()=>{
    window.opener.postMessage('子窗口发来信息')
}