function simpleHandler(event){
    alert("button was clicked");
    var content = document.getElementById("content");
    if(btn.innerHTML=="Hide"){
        content.style.display = "none";
        btn.innerHTML="show";
    }else{
        content.style.display = "block";
        btn.innerHTML="Hide";
        content.className= "makeItDisapear";
        setTimeout(function(){
            content.style.display="none";
        },500);
    }
}
var btn =document.getElementById("testButton");
btn.addEventListener("click",simpleHandler);
var img = document.getElementById("mainImage");
img.addEventListener("mouseover",function (event){
    img.className = "makeItGray";
});
ime.addEventListener("mouseout",function (event){
    img.className ="makeItNormal";
});

