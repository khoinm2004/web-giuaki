function show_hide() {
    if(document.getElementById("full").style.display!='block!'){
        document.getElementById("full").style.display = 'block';
        document.getElementById("line").innerHTML = 'Rút gọn';
        document.getElementById("link").className = 'close';
    }
    else{
        document.getElementById("").style.display = 'none'; 
        document.getElementById("link").innerHTML = 'Xem đầy đủ';
        document.getElementById("link").className = 'open';
    }
    return false;
}