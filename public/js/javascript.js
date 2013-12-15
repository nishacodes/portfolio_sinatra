$(window).on('scroll', function() {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 150 && !$('.nav').hasClass('visible')) {
        $('.nav').animate({opacity : 1}, 'slow', function() {
            $(this).addClass('visible').removeAttr('style');
        });
    } else if ($(this).scrollTop() <= 150 && $('.nav').hasClass('visible')) {
        $('.nav').animate({opacity : 0}, 'slow', function() {
            $(this).removeClass('visible').removeAttr('style');
        });
    }
});