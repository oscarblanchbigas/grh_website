/** *************Init JS*********************

    TABLE OF CONTENTS
    ---------------------------
    1.Ready function
    2.Load function
    3.Subscribe JS
    4.Full height function
    5.Resize function

    Pogody function

    11.click function

    notifyForm function
    animateStart function
    animateFinish function
    placeholder ie9
 ** ***************************************/
 "use strict";


/*****Ready function start*****/
$(document).ready(function(){
  pogody();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
    animateStart();
    $("body").css('overflow-y','visible');
});
/*****Load function* end*****/


/***** Full height function start *****/
var setHeight = function () {
    var height = $(window).height();
    $('.full-height').css('min-height', (height));
};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
    setHeight();
}).resize();
/***** Resize function end *****/

/***** Pogody function start *****/
function pogody(){
    /*click function*/
    var target = $('#splitlayout');
    target.data("transitioning", false)

    $("#glossary1").on('click', function(){
        if (target.data("transitioning")==false) {
            target.data("transitioning", true)
            
            if ( target.hasClass('reset-layout') ) {
                target.removeClass('close-right');
                target.addClass('open-left');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
                    target.removeClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
            }
            else if ( target.hasClass('open-left') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-left');
                target.addClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
                    target.addClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
            }
            $('.glossary1 .fa-times').toggleClass('opacity-hide');
            $('.call-to-action .fa-lightbulb-o').toggleClass('opacity-hide');
            $('#contact').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
        }
    });

    $(".glossary2").on('click', function(){
        if (target.data("transitioning")==false) {
            target.data("transitioning", true)
                if ( target.hasClass('reset-layout') ) {
                    target.removeClass('close-right');
                    target.addClass('open-left');
                    target.removeClass('close-left');
                    target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                    function() {
                        target.removeClass('reset-layout')
                        target.data("transitioning", false);  // Transition has ended.
                    });
                }
                else if ( target.hasClass('open-left') ) {
                    target.removeClass('reset-layout');
                    target.removeClass('open-left');
                    target.addClass('close-left');
                    target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                    function() {
                        target.addClass('reset-layout')
                        target.data("transitioning", false);  // Transition has ended.
                    });
                }
            $('.glossary1 .fa-times').toggleClass('opacity-hide');
            $('.call-to-action .fa-lightbulb-o').toggleClass('opacity-hide');
            $('#contact').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
        }
    });

    $(".contact").on('click', function(){
        if (target.data("transitioning")==false) {
            target.data("transitioning", true)
        
            if ( target.hasClass('reset-layout') ) {
                target.addClass('open-right');
                target.removeClass('close-right');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.removeClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
             }
            else if ( target.hasClass('open-right') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-right');
                target.addClass('close-right');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.addClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
            }
            $('.call-to-action .fa-comment').toggleClass('opacity-hide');
            $('.contact .fa-times').toggleClass('opacity-hide');
            $('#glossary1').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
        }
    });

    $(".contact2").on('click', function(){
        if (target.data("transitioning")==false) {
            target.data("transitioning", true)
        
            if ( target.hasClass('reset-layout') ) {
                target.addClass('open-right');
                target.removeClass('close-right');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.removeClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
             }
            else if ( target.hasClass('open-right') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-right');
                target.addClass('close-right');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.addClass('reset-layout')
                    target.data("transitioning", false);  // Transition has ended.
                });
            }
            $('.call-to-action .fa-comment').toggleClass('opacity-hide');
            $('.contact .fa-times').toggleClass('opacity-hide');
            $('#glossary1').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
        }
    });



    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }

    if ( isMobile() == true ) {

    $(".page-left").swipe({

        swipeLeft:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left

        
          if ( target.hasClass('reset-layout') ) {
            target.removeClass('close-right');
            target.addClass('open-left');
            target.removeClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.removeClass('reset-layout')
            });
         }
        else if ( target.hasClass('open-left') ) {
            target.removeClass('reset-layout');
            target.removeClass('open-left');
            target.addClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.addClass('reset-layout')
            });
        }
        $('.glossary1 .fa-times').toggleClass('opacity-hide');
        $('.call-to-action .fa-lightbulb-o').toggleClass('opacity-hide');
        $('#contact').toggleClass('opacity-inv');
        $('#PrevPage').toggleClass('opacity-inv');
        $('#NextPage').toggleClass('opacity-inv');
        $('.location').toggleClass('opacity-inv');
  
  }


             


        });

    $(".side-left").swipe({

        swipeRight:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left
             if ( target.hasClass('reset-layout') ) {
            target.removeClass('close-right');
            target.addClass('open-left');
            target.removeClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.removeClass('reset-layout')
            });
         }
        else if ( target.hasClass('open-left') ) {
            target.removeClass('reset-layout');
            target.removeClass('open-left');
            target.addClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.addClass('reset-layout')
            });
        }
        $('.glossary1 .fa-times').toggleClass('opacity-hide');
        $('.call-to-action .fa-lightbulb-o').toggleClass('opacity-hide');
        $('#contact').toggleClass('opacity-inv');
        $('#PrevPage').toggleClass('opacity-inv');
        $('#NextPage').toggleClass('opacity-inv');
        $('.location').toggleClass('opacity-inv');
        }
     });


    $(".page-right").swipe({

        swipeRight:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left
            if ( target.hasClass('reset-layout') ) {
                target.addClass('open-right');
                target.removeClass('close-right');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.removeClass('reset-layout')
                });
             }
            else if ( target.hasClass('open-right') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-right');
                target.addClass('close-right');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.addClass('reset-layout')
                });
            }
            $('.call-to-action .fa-comment').toggleClass('opacity-hide');
            $('.contact .fa-times').toggleClass('opacity-hide');
            $('#glossary1').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv'); 
        }
     });

     $(".side-right").swipe({

        swipeLeft:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left

        
              if ( target.hasClass('reset-layout') ) {
                target.addClass('open-right');
                target.removeClass('close-right');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.removeClass('reset-layout')
                });
             }
            else if ( target.hasClass('open-right') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-right');
                target.addClass('close-right');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.addClass('reset-layout')
                });
            }
            $('.call-to-action .fa-comment').toggleClass('opacity-hide');
            $('.contact .fa-times').toggleClass('opacity-hide');
            $('#glossary1').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
  
        }
    });
$(".central").swipe({

        swipeRight:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left
             if ( target.hasClass('reset-layout') ) {
            target.removeClass('close-right');
            target.addClass('open-left');
            target.removeClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.removeClass('reset-layout')
            });
         }
        else if ( target.hasClass('open-left') ) {
            target.removeClass('reset-layout');
            target.removeClass('open-left');
            target.addClass('close-left');
            target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                target.addClass('reset-layout')
            });
        }
        $('.glossary1 .fa-times').toggleClass('opacity-hide');
        $('.call-to-action .fa-lightbulb-o').toggleClass('opacity-hide');
        $('#contact').toggleClass('opacity-inv');
        $('#PrevPage').toggleClass('opacity-inv');
        $('#NextPage').toggleClass('opacity-inv');
        $('.location').toggleClass('opacity-inv');
        }
        

     });

$(".central").swipe({

        swipeLeft:function(event, direction, distance, duration, fingerCount) {
    //This only fires when the user swipes left

        
              if ( target.hasClass('reset-layout') ) {
                target.addClass('open-right');
                target.removeClass('close-right');
                target.removeClass('close-left');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.removeClass('reset-layout')
                });
             }
            else if ( target.hasClass('open-right') ) {
                target.removeClass('reset-layout');
                target.removeClass('open-right');
                target.addClass('close-right');
                target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                function() {
                    target.addClass('reset-layout')
                });
            }
            $('.call-to-action .fa-comment').toggleClass('opacity-hide');
            $('.contact .fa-times').toggleClass('opacity-hide');
            $('#glossary1').toggleClass('opacity-inv');
            $('#PrevPage').toggleClass('opacity-inv');
            $('#NextPage').toggleClass('opacity-inv');
            $('.location').toggleClass('opacity-inv');
  
        }
    });

}

/*input box animation*/
if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }

    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
}
/***** Pogody function end *****/


/***** animateStart function start *****/
function animateStart(){
  var activeSection = $('.section.active');

  $('[data-animation]').each(function(){
        var $this     = $(this),
                animation = 'fadeIn',
                delay     = 1;

        if ($this.data('animation')){
            animation = $this.data('animation');
        }

        if ($this.data('animationDelay')){
            delay = $this.data('animationDelay');
        }

        if ($this.closest('.section').hasClass('active')){
            $this.css('animation-delay', delay + 'ms').addClass('animated').addClass(animation);
        }
  });
}
/***** animateStart function end *****/

/***** animateFinish function start *****/
function animateFinish(){
  var activeSection = $('.section.active'),
            duration      = 1;

  $('[data-out-animation]').each(function(){
        var $this        = $(this),
                animation    = 'fadeIn',
                outAnimation = 'fadeOut',
                delay        = 1,
                outDelay     = 1;

        if ($this.data('animation')){
            animation = $this.data('animation');
        }

        if ($this.data('outAnimation')){
            outAnimation = $this.data('outAnimation');
        }

        if ($this.data('animationDelay')){
            delay = $this.data('animationDelay');
        }

        if ($this.data('outAnimationDelay')){
            outDelay = $this.data('outAnimationDelay');
        }

        $this.css('animation-delay', delay + 'ms');


        if ($this.closest('.section').hasClass('active')){
            if (outDelay >= duration) {
                duration = outDelay;
            }

            $this.removeClass(animation).addClass(outAnimation);

            if ($this.data('outAnimationDelay')){
                $this.css('animation-delay', outDelay + 'ms');
            } else {
                $this.css('animation-delay', '1ms');
            }
        } else {
            $this.removeClass(animation).removeClass(outAnimation).removeAttr('style', 'animation-delay');
        }
  });
}
/***** animateFinish function end *****/


/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/
