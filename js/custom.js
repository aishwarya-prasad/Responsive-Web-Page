/*------------------------------------------
             Services
-------------------------------------------*/

$(function () {
    
    //animation on scroll
    new WOW().init();
    
/*------------------------------------------
              Work
------------------------------------------*/
});
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});
/*------------------------------------------
              Team
------------------------------------------*/

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});

/*------------------------------------------
              Testimonial
------------------------------------------*/


$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*------------------------------------------
              stats
------------------------------------------*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});


/*----------------------------------------------------
                        NAVIGATION
-----------------------------------------------------*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("evento-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("evento-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
// Smooth scrollings
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});