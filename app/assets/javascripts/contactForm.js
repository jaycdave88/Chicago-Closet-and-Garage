// var mail_Btn = $(".submit_contactMe");
// mail_Btn.click(function(){

//   if ($("#fname").val()=='' || $("#femail").val()=='' || $("#fsubject").val()=='' || $("#message").val()=='') {
//     return;
//   }
//   var contactForm = $("#contactForm");
//   $.ajax({
//     url: contactForm.attr("action"),
//     type: "POST",
//     data: contactForm.serializeArray(),
//     success:function(result, status){
//       console.log("after the sucess")
//       $("#name").val('');
//       $("#email").val('');
//       $("#subject").val('');
//       $("#message").val('');
//     }
//   })
// });

$(".formValidation").on("submit", function(e){
  
  var errorMessage  = $(".errorMessage");
  var hasError = false;
  
  $(".inputValidation").each(function(){
    var $this = $(this);
    
    if($this.val() == ""){
      hasError = true;
      $this.addClass("inputError");
      errorMessage.html("<p>Error: Please correct errors above</p>");
      e.preventDefault();
    }if($this.val() != ""){
      $this.removeClass("inputError"); 
    }else{
      return true; 
    }
  }); //Input
  errorMessage.slideDown(700);
}); //Form .submit
