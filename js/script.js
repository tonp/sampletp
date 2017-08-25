/* 
*	Load contents with fade animation.
*
*/
$(document).ready(function(){
	
	$('.content.al').load('about.html');
	$('a:first-child').css("color", "#E47A3C");
	
	$('.menu.al a').click(function(event){
		
		var toLoad = $(this).attr('href'); 
		$('.menu.al a').css('color', '#8D928E');
		$(this).css("color", "#E47A3C");
	
		$(".content.al").fadeOut(1).load(toLoad+'.html').fadeIn(500);
	
		return false;
	});
	
});