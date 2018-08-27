require('sweetalert2')

      // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
                  $('.links').addClass('white')
            }

            else {
                  $('nav').removeClass('black');
                  $('.links').removeClass('white')
            }
      })