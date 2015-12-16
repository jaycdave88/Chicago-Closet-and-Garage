$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
		$('#contact_link').click(function(){
			$('#screenCSS').remove()
		})
	}, 9250);  
})