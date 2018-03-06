$(function () {
    var mainNav = $('.main-nav');
    var linksNav = $('nav a');

    //show navbar
    $(window).scroll(function () {

        if (window.scrollY > ($('.header').height() / 5)) {
            mainNav.addClass('main-scroll');
            linksNav.css('color', '#777');
        }

        if (window.scrollY < ($('.header').height() / 5)) {
            mainNav.removeClass('main-scroll');
            linksNav.css('color', '#fff');
        }

    });

    //smooth scroll
    linksNav.click(function () {
        var $href = $(this).attr('href');
        $('body').stop().animate({
            scrollTop: $($href).offset().top
        }, 1000);
        return false;
    });

});


