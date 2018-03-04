'use strict';



$(function(){
    
    var mainNav = $('#main-nav');
   $(window).scroll(function(){
       
       if (window.scrollY > ($('#main-header').height()/10)) {
           mainNav.addClass('navScroll');
       }
       
       if (window.scrollY < ($('#main-header').height()/10)) {
           mainNav.removeClass('navScroll');
       }
       
   });
    
});