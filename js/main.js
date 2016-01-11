$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav'),
        homeIcon = $('.home-icon'),
        windowWidth = $(window).width(),
        active = 'active',
        featuredWorkitem = ".featured-works .item .image img",
        featuredWorkimageBox = ".featured-works .item .image",
        wrapper = $('.wrapper'),
        contactAction = $("#contact"),
        contactClose = $(".form-close"),
        check = (".check"),
        checkInput = (".check input"),
        contactBox = $(".contact");

   $(pull).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass(active);
    $(nav).fadeToggle();
    $(wrapper).fadeToggle();
    });

   $(contactAction).on('click', function(e) {
    e.preventDefault();
    $(contactBox).fadeIn();
    $(nav).fadeOut();
    });

   $(contactClose).on('click', function() {
    $(contactBox).fadeOut();
    $(nav).fadeIn();
   });

    $(window).scroll(function() {
        if ($(this).scrollTop()>0)
        {
            $(homeIcon).fadeIn();
            $('body').addClass("scrolling");
        }
        else
        {
            $(homeIcon).fadeOut();
            $('body').removeClass("scrolling");
        }
    });

    $(check).on('click', function(){
        $(this).toggleClass("active");
    });

    $(window).resize(function(){
        if(windowWidth > 768 && $(nav).is(':hidden')) {
            $(nav).removeAttr('style');
        }
    });

    $(featuredWorkitem).each(function(){
        var bgImg = $(this).attr("src");
        console.log(bgImg);
        $(this).css("background-image", "url('" + bgImg + "')");
        $(this).removeAttr("src");
    });

    $('.bx-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    $('.works-slide').bxSlider({
        controls: true
    });

});

