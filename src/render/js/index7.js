// 选择文件对话框
const {dialog} = require('electron').remote;
const btn = document.getElementById('btn')

btn.onclick = () =>{
    dialog.showOpenDialog({
        title:'请选择你需要的文件',   // 对话框标题
        defaultPath: '默认路径',     // 默认打开路径
        filters:[                   // 文件选择过滤
            {
                name:'jpg',
                extensions:['jpg']
            }
        ],
        buttonLabel:'是否确认',
        properties: ['openFile', 'multiSelections']   // 对话框使用的功能，允许选择文件、允许多选
    }).then(res => {
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}