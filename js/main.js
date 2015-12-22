$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav'),
        homeIcon = $('.home-icon'),
        wrapper = $('.wrapper');

   $(pull).on('click', function(e) {
    console.log("helo")
    e.preventDefault();
    $(this).toggleClass('active');
    $(nav).fadeToggle();
    $(wrapper).fadeToggle();
    });


    $(window).scroll(function() {
        if ($(this).scrollTop()>0)
        {
            $(homeIcon).fadeOut();
            $('body').addClass("scrolling");
        }
        else
        {
            $(homeIcon).fadeIn();
            $('body').removeClass("scrolling");
        }
    });


});

