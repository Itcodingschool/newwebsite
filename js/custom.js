/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-Preloader
-Scroll Animation
-Scale images
-Animated Entrances
-Chars Start
-Loader blocks
-Zoom Images
-Isotope filter
-Select customization
-Main slider
-Sliders
-Sliders with thumbnails
-Slider numbers
-Video player
-View catalog
*/



$(document).ready(function() {

    "use strict";



/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////


    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');


/////////////////////////////////////
//  Scroll Animation
/////////////////////////////////////


if ($('.scrollreveal').length) {
    window.sr = ScrollReveal({
        reset:true,
        duration: 1000,
        delay: 200
    });

    sr.reveal('.scrollreveal');
  }


/////////////////////////////////////////////////////////////////
// Scale images
/////////////////////////////////////////////////////////////////

  if ($('.img-scale').length) {
    $(function () { objectFitImages('.img-scale') });
  }


/////////////////////////////////////
//  Chars Start
/////////////////////////////////////


if ($('body').length) {
    $(window).on('scroll', function() {
        var winH = $(window).scrollTop();

        $('.b-progress-list').waypoint(function() {
            $('.js-chart').each(function() {
                CharsStart();
            });
        }, {
            offset: '80%'
        });
    });
}


function CharsStart() {

    $('.js-chart').easyPieChart({
        barColor: false,
        trackColor: false,
        scaleColor: false,
        scaleLength: false,
        lineCap: false,
        lineWidth: false,
        size: false,
        animate: 5000,

        onStep: function(from, to, percent) {
            $(this.el).find('.js-percent').text(Math.round(percent));
        }
    });
}



/////////////////////////////////////
//  Loader blocks
/////////////////////////////////////

    $( ".js-scroll-next" ).on( "click", function() {

        var hiddenContent =  $( ".js-scroll-next + .js-scroll-content") ;

        $(".js-scroll-next").hide() ;
        hiddenContent.show() ;
        hiddenContent.addClass("animated");
        hiddenContent.addClass("animation-done");
        hiddenContent.addClass("bounceInUp");

    });



/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////

  if ($('.js-zoom-gallery').length) {
      $('.js-zoom-gallery').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.js-zoom-gallery__item', // the selector for gallery item
              type: 'image',
              gallery: {
                enabled:true
              },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
          });
      });
    }


  if ($('.js-zoom-images').length) {
      $('.js-zoom-images').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });

    }


  if ($('.popup-youtube').length) {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
  }

////////////////////////////////////////////
// ISOTOPE FILTER
///////////////////////////////////////////


  if ($('.b-isotope').length) {

    var $container = $('.b-isotope-grid');

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });

    // filter items when filter link is clicked
    $('.b-isotope-filter a').on( 'click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });

    $('.b-isotope-filter a').on( 'click', function() {
      $('.b-isotope-filter').find('.current').removeClass('current');
      $( this ).parent().addClass('current');
    });
  }



/////////////////////////////////////
// Select customization
/////////////////////////////////////

  if ($('.selectpicker').length) {
    $('.selectpicker').selectpicker();
  }



////////////////////////////////////////////
// Main slider
///////////////////////////////////////////


  if ($('#main-slider').length) {

      var sliderWidth = $("#main-slider").data("slider-width");
      var sliderHeigth = $("#main-slider").data("slider-height");
      var sliderArrows = $("#main-slider").data("slider-arrows");
      var sliderButtons = $("#main-slider").data("slider-buttons");

      $( '#main-slider' ).sliderPro({
          width:  sliderWidth,
          height: sliderHeigth,
          arrows: sliderArrows,
          buttons: sliderButtons,
          fade: true,
          fullScreen: true,
          touchSwipe: false,
          autoplay: true
      });
  }


////////////////////////////////////////////
// Sliders
///////////////////////////////////////////

  if ($('.js-slider').length) {
    $('.js-slider').slick();
  }


////////////////////////////////////////////
// Sliders with thumbnails
///////////////////////////////////////////

  if ($('.js-slider-for').length) {
    $('.js-slider-for').slick({
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-nav'
    });
    $('.js-slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-slider-for',
      focusOnSelect: true
    });
  }

/////////////////////////////////////////////////////////////////
// Slider numbers
/////////////////////////////////////////////////////////////////


  if ($('#filterPrice').length) {

    var keypressSlider = document.getElementById('filterPrice');
      var input0 = document.getElementById('input-with-keypress-0');
      var input1 = document.getElementById('input-with-keypress-1');
      var inputs = [input0, input1];

      noUiSlider.create(keypressSlider, {
          start: [5000, 35000],
          connect: true,
          step: 100,
          // tooltips: true,
          format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
          }),
          // tooltips: [true, wNumb({decimals: 1})],
          range: {
              'min': 1000,
              'max': 50000
          }
      });

      keypressSlider.noUiSlider.on('update', function (values, handle) {
          inputs[handle].value = values[handle];
      });
  }


/////////////////////////////////////
//  Video player
/////////////////////////////////////


if ($('.player').length) {
  $(".player").flowplayer();
}


////////////////////////////////////////////
// View catalog
///////////////////////////////////////////


  $('.btns-switch__item').on( 'click', function() {
    $('.btns-switch').find('.active').removeClass('active');
    $( this ).addClass('active');
  });

  $('.js-view-th').on( 'click', function() {
    $('.b-goods-group > .col-12').removeClass('col-12').addClass('col-lg-4 col-md-6');
    $('.b-goods').removeClass('b-goods_list');
  });

  $('.js-view-list').on( 'click', function() {
    $('.b-goods-group > .col-lg-4').addClass('col-12').removeClass('col-lg-4 col-md-6');
    $('.b-goods').addClass('b-goods_list');
  });


  $('.flip-btn').on( 'click', function() {
    $( this ).parent().toggleClass('flip-active');
  });


  $('.flip-btn-hide').on( 'click', function() {
    $(this).parents('.b-goods').removeClass('flip-active');
  });


  if ($(window).width() < 768) {
    $('.b-goods-group > .col-12').removeClass('col-12').addClass('col-lg-4 col-md-6');
    $('.b-goods').removeClass('b-goods_list');
  }

});



////////////////////////////////////////////
// List View 
///////////////////////////////////////////

   // JavaScript to handle checkbox changes
        function togglesegments() {
            const checkboxes = document.querySelectorAll('.segment-check');
            const allsegments = document.querySelectorAll('.segment');
            let anyChecked = false;

            // Hide all paragraphs initially
            allsegments.forEach(segment => segment.classList.add('hidden'));

            // Loop through checkboxes to find which one is checked
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    anyChecked = true;
                    const segmentsToShow = document.querySelectorAll('.' + checkbox.value);
                    segmentsToShow.forEach(segment => segment.classList.remove('hidden'));
                }
            });

            // If no checkbox is checked, show all paragraphs
            if (!anyChecked) {
                allsegments.forEach(segment => segment.classList.remove('hidden'));
            }
        }

        // Attach event listeners to all checkboxes
        document.querySelectorAll('.segment-check').forEach(function(checkbox) {
            checkbox.addEventListener('change', togglesegments);
        });

        // Initial call to show all paragraphs at the start
        togglesegments();


