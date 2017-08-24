$(document).ready(function(){
	
	// When on the page
	$('.content.al').load('about.html');
	$('a:first-child').css("color", "#E47A3C");
	
	$('.menu.al a').click(function(event){
		
		var toLoad = $(this).attr('href'); // the attribute to the a element 
		
		$('.menu.al a').css('color', '#8D928E');
		$(this).css("color", "#E47A3C");
	
		 //$('.content.al').load(toLoad+'.html');
		
		
		$(".content.al").fadeOut(1).load(toLoad+'.html').fadeIn(500);
		
		

		
		return false;
	});
	
	
});