$(function() {
  
  
  $("#przycisk1").click(function(){
   $("p:first").before($("p:last"));
  });
  
  $("#przycisk2").click(function(){
   $("p:last").after($("p:first"));
  });
  
});

  

  