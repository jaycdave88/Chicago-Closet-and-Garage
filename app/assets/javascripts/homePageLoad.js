	$.ajax({
		url: "/gallery",
		cache: false,
		sucess: function(html){
			$("#first-load").append(html);
		}
	});
