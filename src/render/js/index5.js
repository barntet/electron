// 创建子窗口
const btn = document.getElementById('btn');
btn.onclick = ()=>{
    window.open('child.html')
}

// 子窗口与父窗口通信
const message = document.getElementById('message')
window.addEventListener('message',msg => {
    console.log(msg)
    message.innerHTML = msg.data
})