/* put your event code here */
$(function(){
    $(".panel")
    .on("mousemove",function(e){
        $("#message").html("x="+e.pageX +"y="+e.pageY);
    })
    .on("mouseleave",function(e){
        $("message").html("goodbye!");
    })
    .on("click",fuction() {
        $("#message").html("stopped	move reporting");
        $(".panel").off("mousemove");
    });
});
