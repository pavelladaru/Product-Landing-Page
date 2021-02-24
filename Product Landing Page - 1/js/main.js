
// Preloader
$(window).on('load',function(){
    setTimeout(function(){
        $(".preloader").fadeOut('fast');
    }, 300);
});

$(document).ready(function(){

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar-nav", offset: 67});

    // Add smooth scrolling on all links inside the navbar
    $("nav ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();
     
        // store hash
        var hash = this.hash;
     
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){
     
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
          });
        
        // hide navbar on mobile
        $(".navbar-collapse").collapse('hide');
     });

    // Product Carousel
    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    // Testimonial Carousel
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
  });