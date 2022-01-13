(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }
  
      /* Loader Code Start */
      $(window).on("load", function() { 
          $(".section-loader").fadeOut("slow");
          
          var $container = $('.portfolioContainer');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  queue: true
              }
          });
       
          $('.portfolio-nav li').click(function(){
              $('.portfolio-nav .current').removeClass('current');
              $(this).addClass('current');
       
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      queue: true
                  }
               });
               return false;
          });
        });
      /* Loader Code End */



      $(window).on('load', function() {
       /* 
	   $('#header-slider #animation-slide').owlCarousel({
               autoHeight: true,
               items: 1,
               loop: true,
               autoplay: true,
               dots: false,
               nav: false,
               autoplayTimeout: 3000,
               navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
               animateIn: "zoomIn",
               animateOut: "fadeOutDown",
               autoplayHoverPause: false,
               touchDrag: true,
               mouseDrag: true
           });
		   Loader Code End */
		   
         $("#animation-slide").on("translate.owl.carousel", function () {
             $(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity","0");
             $(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity","0");
         });          
         $("#animation-slide").on("translated.owl.carousel", function () {
             $(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity","1");
             $(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity","1");
         });
     });
   
    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    var trigger = $('.navbar-toggler'),
      overlay     = $('.overlay'),
      navc     = $('.navbar-collapse'),
      active      = false;
  

      $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
          $('.navbar-toggler').toggleClass('active')
          overlay.toggleClass('active');
          navc.toggleClass('active');
      });  
      
        
    /*
    |=================
    | Onepage Nav
    |================
  
        
      $('#mh-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });   */
    
    /*
    |=================
    | fancybox
    |================
    */
 
      $("[data-fancybox]").fancybox({});
      
      
  


 
    
    /*
    |=================
    | Portfolio mixin
    |================
    
    $('#portfolio-item').mixItUp();
    
    */ 

    

        
        
        

    
}(jQuery));
