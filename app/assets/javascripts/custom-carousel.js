$(document).ready(function() {

  // $("#main-carousel").owlCarousel();

  var owl = $("#main-carousel");

  owl.owlCarousel({
    // navigation : false,
    // responsive: true,
    singleItem : true,
    stopOnHover : false,
    autoPlay : 5000,
    transitionStyle : "goDown"
  });

});
