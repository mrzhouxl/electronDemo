var fs = require('fs');
var BrowserWindow= require('electron').remote.BrowserWindow;
window.onload=function(){
  var btn = this.document.querySelector("#btn")
  var con = this.document.querySelector("#con")
  btn.onclick=function(){
    fs.readFile('./person.txt',(err,data)=>{
      con.innerHTML=data
    })
  }

  var btn1 = this.document.querySelector("#btn2")
  btn1.onclick=function(){
    newWin=new BrowserWindow({
      window:300,
      height:300
    })
    newWin.loadFile('index2.html')
    newWin.on('close',()=>{
      newWin=null
    })
  }
}