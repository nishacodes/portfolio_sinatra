$(document).ready(function(){
  
  // TEXT TYPE EFFECT
  $(".overlay").fadeOut(1500, function(){
    $("h1").fadeIn(1000, function(){
      $("h2").typed({
        strings: ["developer.", "designer.", "dreamer.", "developer. designer. dreamer. "],
        typeSpeed: 30,
        backDelay: 700, // pause before backspacing
        backSpeed: 30
      });
    });
  });

  // SMOOTH SCROLL
  $('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
    }
  });

  // STICKY NAV
  $(function(){
    var menu = $('#menu'),
      pos = menu.offset();
      $(window).scroll(function(){
        if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default') && $(this).scrollTop() > 500){
          menu.fadeOut('fast', function(){
            $(this).removeClass('default').addClass('fixed').fadeIn('fast');
          });
        } else if($(this).scrollTop() <= pos.top+500 && menu.hasClass('fixed')){
          menu.fadeOut('fast', function(){
            $(this).removeClass('fixed').addClass('default').fadeOut('fast');
                      console.log($(this).html());
          });
        }
      });
  });

  // Carousel
  $('.carousel').carousel();
  

})




