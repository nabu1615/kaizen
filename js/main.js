$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav');

   $(pull).on('click', function(e) {
    console.log("helo")
    e.preventDefault();
    $(this).toggleClass('active');
    $(nav).fadeToggle();
    });
});

