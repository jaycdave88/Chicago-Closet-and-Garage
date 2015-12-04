$(function() {
  var $links = $('.sidebar-nav a[id$="_link"]');

  // console.log($links);
  
  $links.click(function(event) {
    var link = event.currentTarget.id;
    // console.log(link);
    // console.log(link.id)
    var target = "http://localhost:3000/";

    $.ajax({
      type: 'get', 
      url: target,
      dataType: 'script',
      data: {'link_id': link}
    })
  });
});

