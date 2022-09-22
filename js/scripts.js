$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

});

var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});



