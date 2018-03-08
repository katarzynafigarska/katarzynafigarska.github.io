window.addEventListener("scroll", function(){
    
    var nav = document.getElementById("main-nav")
    var y = window.pageYOffset; 
    
    if ( y > 100 ){
        console.log(y);
        nav.style.opacity = "1.0";
            nav.style.color = "#1ac056";           
    }
    
    else{
        nav.style.opacity = "0";
        nav.style.opacity = "white";
    };
       
});



$(function(){

    $(window).scroll(function() {
        
        if ( $(window).scrollTop() > 100 ){
        $("#main-nav").css({opacity: "1.0", color: "#1ac056"});
            
        }
        else {
            
        $("#main-nav").css({opacity: "0", color: "white"});
        }           
        
    })
    
});