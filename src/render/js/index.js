
// read
const fs = require('fs');
const path = require('path')

const btnRead = document.querySelector('#btnRead');
const filesDaata = document.querySelector('#filesData');
const btnWrite = document.querySelector('#btnWrite');


window.onload = ()=>{
    btnRead.onclick = () => {
        fs.readFile(path.join(__dirname, 'text.txt'),(err,data)=>{
            console.log(data);
            filesDaata.innerHTML = data
        })
    }
    btnWrite.onclick = () => {
        fs.writeFile(path.join(__dirname,'text.txt'),'添加1111', 'utf8',err=>{
            console.log(err)
        })
    }
}
