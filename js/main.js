
// Owl Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// Sidebar nav: open
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Sidebar nav: close
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls for navbar
$(function() {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//Return to the Top Button
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
             fixed = true;

            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});
