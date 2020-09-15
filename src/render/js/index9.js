// 消息对话框
const btn = document.getElementById("btn");
const { dialog } = require('electron').remote

btn.onclick = () => {
    dialog.showMessageBox({
    type: "warning",
    title: "警告",
    message: "这是一个警告对话框",
    buttons: ["知道了", "无所谓"],
  }).then(res => {
      console.log(res)
  });
};