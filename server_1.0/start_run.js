document.onclick = function (e) {
    var e = e || window.event;  //标准化事件对象
    var t = e.target || e.srcElement;  //获取发生事件的元素，兼容IE和DOM
    if (e.ctrlKey && e.shiftKey) {  //如果同时按下Ctrl和Shift键
        alert(1)
    }
}

function start1(){
    window.location.href="./Windows InetMgr.lnk"
}
function start2(){
    window.location.href="../局域网数据库"
}