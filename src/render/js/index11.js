// 底部消息提醒
const btn = document.getElementById('btn')

const option = {
    title: '新消息提醒',
    body: '你有新的消息提醒'
}
btn.onclick = ()=>{
    new window.Notification(option.title,option)
}