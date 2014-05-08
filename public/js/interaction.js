$(document).ready(function(){

  // FULLPAGE EFFECT   
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage'],
    menu: '#menu'
  });
  
  $('#showExamples').click(function(e){
    e.stopPropagation();
    $('#examplesList').toggle();
  });
  
  $('html').click(function(){
    $('#examplesList').hide();
  });
    

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
  $(".button-round").delay(8000).fadeIn(1000);

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
  // $('.carousel').carousel();
  

  // Masonry
  var container = document.querySelector('.masonry');
  var msnry = new Masonry( container, {
    columnWidth: 60
  });

  eventie.bind( container, 'click', function( event ) {
    // don't proceed if item was not clicked on
    if ( !classie.has( event.target, 'item' ) ) {
      return;
    }
    // change size of item via class
    classie.toggle( event.target, 'gigante' );
    // trigger layout
    msnry.layout();
  });

  $(".item").mouseover(function(){
      $(this).find(".top").hide();  
  })

  $(".item").mouseleave(function(){
    if($(this).hasClass('gigante')){
      // 
    }else {
      $(this).find(".top").show();
    }
  })

  $(".middle").click(function(){
    $(this).hide();
    $(this).parent().trigger( "click" );
  })

  $(".back").click(function(){
    $(this).siblings().show();
    $(this) .parent().trigger( "click" );
  })


})




