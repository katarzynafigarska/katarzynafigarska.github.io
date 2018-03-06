$(function() {
  
$("#przycisk").click(function(){
    $("div").animate({
        left: '100px',
        height: '100px',
        width: '100px'
    }, 3000);
    
  function kolor() {
  $("div").animate({backgroundColor: "blue"}, 5000, function(){
     $("div").html("<h3>Animacja zakończona</h3>");
  }
  )};
  kolor();
});
  
});