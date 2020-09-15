// 选择文件
const btn = document.getElementById('btn');
const fs = require('fs');
const {dialog} = require('electron').remote;
btn.onclick = ()=>{
    dialog.showSaveDialog({
        title: '选择文件'
    }).then(res => {
        console.log(res);
        fs.writeFileSync(res.filePath, '你好啊');
    }).catch(err =>{
        console.log(err)
    })
}