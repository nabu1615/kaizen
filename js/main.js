$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav'),
        homeIcon = $('.home-icon'),
        windowWidth = $(window).width(),
        active = 'active',
        featuredWorkitem = ".featured-works .item .image",
        featuredWorkimageBox = ".featured-works .item .image img",
        wrapper = $('.wrapper'),
        contactAction = $("#contact"),
        contactClose = $(".form-close"),
        check = (".check"),
        checkInput = (".check input"),
        contactBox = $(".contact"),
        bxsliderServices = null;


   $(pull).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass(active);
        $(nav).fadeToggle();
        $(wrapper).fadeToggle();
    });

    $(window).resize(function(){
        $(wrapper).fadeIn();
        if(windowWidth < 768){
           $(pull).on('click', function(e) {
                e.preventDefault();
                $(wrapper).fadeIn();
            });
        }
    });

   $(contactAction).on('click', function(e) {
    e.preventDefault();
    $(contactBox).fadeIn();
    $(nav).fadeOut();
    $(pull).toggleClass(active);
    });

   $(contactClose).on('click', function() {
        $(contactBox).fadeOut();
        $(wrapper).fadeIn();
   });

    $(window).scroll(function() {
        if ($(this).scrollTop()>0 && windowWidth < 768)
        {
            $(homeIcon).fadeIn();
            $('body').addClass("scrolling");
        }
        else if ($(this).scrollTop() === 0 && windowWidth > 768)
        {
            $(homeIcon).fadeIn();
            $('body').removeClass("scrolling");
        }
        else if ($(this).scrollTop()>0 && windowWidth > 768) {
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
        var bgImg = $(this).find('img').attr("src");
        $(this).css("background-image", "url('" + bgImg + "')");
        $(this).find('img').remove();
    });

    $('.bx-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    if(windowWidth < 768) {
        $('#services').bxSlider({
            minSlides: 1,
            maxSlides: 1
        });
    }

    if(windowWidth < 768){
        bxsliderServices = $('#services').bxSlider({
            minSlides: 1,
            maxSlides: 1
        });
    }


    $('.works-slide').bxSlider({
        controls: true
    });

});

