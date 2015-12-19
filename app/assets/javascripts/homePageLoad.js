	$.ajax({
		url: "/contact_page",
		cache: false,
		sucess: function(html){
			$("#first-load").append(html);
		}
	});
