$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 9350);  
});


// window.onload = function(){
//  var load_screen = document.getElementById('loader-wrapper');
//  console.log("fuk");
//  document.body.removeChild(load_screen)
// } 
// ***not working: need to get the self timer working