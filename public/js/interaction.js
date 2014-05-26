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
        strings: ["developer. ^400 designer. ^400 dreamer."],
        typeSpeed: 20,
        backDelay: 700, // pause before backspacing
        backSpeed: 30
      });
    });
  });
  $(".button-round").delay(5500).fadeIn(1000);

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
  // $(function(){
  //   var menu = $('#menu'),
  //     pos = menu.offset();
  //     $(window).scroll(function(){
  //       if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default') && $(this).scrollTop() > 500){
  //         menu.fadeOut('fast', function(){
  //           $(this).removeClass('default').addClass('fixed').fadeIn('fast');
  //         });
  //       } else if($(this).scrollTop() <= pos.top+500 && menu.hasClass('fixed')){
  //         menu.fadeOut('fast', function(){
  //           $(this).removeClass('fixed').addClass('default').fadeOut('fast');
  //                     console.log($(this).html());
  //         });
  //       }
  //     });
  // });
  

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

  // ITEM ANIMATION
  $(".item").on({
    'mouseover': function(){
      $(this).find(".top").fadeOut(200);  
    },
    'mouseleave': function(){
      if($(this).hasClass('gigante')){
      }else {
        $(this).find(".top").fadeIn(500);
      }
    }
  });

  $(".middle").click(function(){
    $(this).hide();
    $(this).parent().trigger( "click" );
    $(this).parent().find('.content, .gradient-left, .gradient-left-dark, .gradient-right').fadeIn(500);
  })

  $(".back").click(function(){
    $(this).siblings().show();
    $(this) .parent().trigger( "click" );
    $(this).parent().find('.content, .gradient-left,  .gradient-left-dark, .gradient-right').hide();
  })

  // HI
  $(".hi").mouseover(function(){
    $(this).find("h3.type").typed({
        strings: ["I'm Nisha"],
        typeSpeed: 30,
        backDelay: 700, // pause before backspacing
        backSpeed: 30
      });
  })

  // BLOG
  $(".blog").on({
    'mouseover': function(){
      $(this).find("p").typed({
        strings: ["Musings on Ruby and JavaScript  >>"]
      })
    },
    'mouseleave': function(){
      $(this).find("p").text("");
    }
  });

  // NYC
  $('.nyc').on({
    'mouseenter': function(){
      $(this).animate({
        'background-position-x': '-110px',
        'background-position-y': '-20px'
      }, 6500, 'linear'); 
    },
    'mouseleave': function(){
      $(this).stop();
    }
  });

  $('.localist').on({
    'mouseenter': function(){
      // $(this).find('.top, .middle').animate({
      //   'background-position-x': '0px',
      //   'background-position-y': '0px'
      // }, 2000); 
    },
    'mouseleave': function(){
      // $(this).find('.top, .middle').stop();
    }
  });

  // Stacking blocks
  $(".code").on({
    'mouseover':function(){
      $(".rails").slideDown(300, function(){
        $(".ruby").slideDown(300, function(){
          $(".sinatra").slideDown(300, function(){
            $(".javascript").slideDown(300, function(){
              $(".jquery").slideDown(300, function(){
                $(".d3").slideDown(300, function(){
                  $(".haml, .sass").slideDown(300);
                })  
              })
            })
          })  
        })
      })
    },
    'mouseleave':function(){
      $(".block").fadeOut();
    }
  })




})






