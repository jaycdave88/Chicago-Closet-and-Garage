$(".single-slide").owlCarousel({ 
  items : 1,
  autoplay:true,
  loop:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  singleItem    : true,
  navigation : true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  pagination : true,
  animateOut: 'fadeOut' 
});
$('.testi-two').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  responsive:{
    0:{
      items:1
    },
    800:{
      items:2
    },
    1000:{
      items:2
    }
  }
});