var msg = document.getElementById ("msgArea");
msg.value = "here is some text";
var title = document.getElementById("pageTitle")
title.innerHTML = "new Title";
document.getElementById("pageTitle").innerHTML ="Even newer title"
msg.value= document.getElementById("first").innerText;
msg.value = "My class is " + msg.getAttribute("class");
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";
elem = document.getElementsByTagName("span");
for (i = 0 ; 1,elem.length;i++){
    document.getElementById("msgArea").value += "\n" + elem[i.innerText];
}
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0;i<counts.length;i++){
    document.getElementById("msgArea").value += "\n" + elem[i.innerText]; 
}
var ps = document.querySelector("#frist p ");
document.getElementById("msgArea").value = ps.innerHTML;
ps =document.querySelectorAll("#first p");
for (i=0;i<ps.length,i++){
    document.getElementById("msgArea").value += ps[i].innerHTML+"\n";   
}    
document.getElementById("msgArea").setAttribute("class","hidden");
document.getElementById("features").style.backgroundColor="green";

