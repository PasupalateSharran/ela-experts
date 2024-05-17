$(document).ready(function() {
        var owl = $('.banner-section .owl-carousel');
        owl.owlCarousel({
            margin: 30,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        })
})

$(document).ready(function() {
    var owl = $('.testimonial-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.blog-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })
})

$('.recentwork-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        391:{
            items:1,
            stagePadding: 0
        },
        576:{
            items:1,
            stagePadding: 100
        },
        600:{
            items:1,
            stagePadding: 150
        },
        791:{
            items:1,
            stagePadding: 200
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 470
        }
    }
})

$(document).ready(function() {
    var owl = $('.partner-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            }
        }
    })
})

// About counter

$(function() {
$('.chart').easyPieChart({
    size: 350,
    barColor: '#e1b261',
    scaleLength: 0,
    lineWidth: 10,
    trackColor: "#5c5c5e",
    lineCap: "circle",
    animate: 2000,
});
});