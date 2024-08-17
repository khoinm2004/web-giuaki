/* put your animation code here */
$(function	()	{		
    $('figure	img').on('mouseover',	function	(e)	{
        var	alt	=	$(this).attr('alt');
        var	src	=	$(this).attr('src');								
        var	newsrc	=	src.replace("small","medium");
        var	preview	=	$('<div	id="preview"></div>');
        var	image	=	$('<img	src="'	+	newsrc	+	'">');
        var	caption	=	$('<p>'	+	alt	+	'</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);
        $(this).addClass("gray");
        //	and	then	fade	preview	in
    $("#preview").fadeIn(1000);										
    });			
});
function	removePreview()	{
    $(this).removeClass("gray");
    $("#preview").remove();
}
function	removePreview()	{
    $(this).removeClass("gray");
    $("#preview").remove();
}	
$("figure	img").on("mouseleave",		removePreview);								
$("figure	img").on("mousemove",	movePreview);			
