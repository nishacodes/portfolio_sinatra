$(document).ready(function(){

  // FULLPAGE EFFECT   
  $('#fullpage').fullpage({
    anchors: ['welcome', 'about'],
    menu: '#menu'
  });

  // TEXT TYPE EFFECT
  $("#section0").animate({'background-color': 'white'}, 500, function(){
    $("#section0, h1").delay(500).fadeIn(1000, function(){
      $("h2").typed({
        strings: ["^800 developer. ^400 designer. ^400 dreamer."],
        typeSpeed: 10,
        backDelay: 700, // pause before backspacing
        backSpeed: 30
      });
    });
  });
  $(".button-round").delay(4500).fadeIn(1000);

  // Masonry

  function masonry(){

    var container = document.querySelector('.masonry');
    var width = (function(){
      if (window.innerWidth >= 1600){
        return 80;
      } else {
        return 60;
      }
    })();
    var msnry = new Masonry( container, {
      columnWidth: width,
      isFitWidth: true
    });

    console.log(msnry.columnWidth);

    eventie.bind( container, 'click', function( event ) {
      // don't proceed if item was not clicked on
      if ( !classie.has( event.target, 'item' ) ) {
        return;
      } else if (classie.has( event.target, 'contact')){
        return;
      } else if (classie.has( event.target, 'blog')){
        return;
      } else if (classie.has( event.target, 'code')){
        return;
      }
      // change size of item via class
      classie.toggle( event.target, 'gigante' );
      
      // trigger layout
      msnry.layout();
    });
  }

  masonry();

  // $(window).resize(function(){
    // masonry();
  // })

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
        strings: [" I'm Nisha"],
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
  

  var lastPosition = -10;
  var direction = "left";
  // NYC
  $('.nyc').on({
    'mouseenter': function(){
      if (lastPosition < 109 && direction =="right") {
        var speed = (-lastPosition - 10)*100;
        $(this).animate({
          'background-position-x': '-10px',
          'background-position-y': '-20px'
        }, speed, 'linear'); 
        direction = "left";
      } else {
        var speed = (110 + lastPosition)*100;
        $(this).animate({
          'background-position-x': '-110px',
          'background-position-y': '-20px'
        }, speed, 'linear'); 
        direction = "right";
      }
      
    },
    'mouseleave': function(){
      $(this).stop();
      lastPosition = parseInt($(this).css('background-position-x'));
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

  $(".contact, .blog").on('click', function(e){
    // e.preventDefault();
    $(this).removeClass('gigante');
  })

})






