$(".single-slide").owlCarousel({ 
  items : 1,
  autoplay:true,
  loop:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  singleItem    : true,
  navigation : false,
  navText: [""],
  pagination : true,
  animateOut: 'fadeOut' 
});
$('.testi-two').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  navText: [""],
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