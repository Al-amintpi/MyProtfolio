$(document).ready(function(){

$('#progress').LineProgressbar({
    percentage: 90,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
});

$('#progress1').LineProgressbar({
    percentage: 50,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
});
$('#progress2').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
}); 
$('#progress3').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
});
$('#progress4').LineProgressbar({
    percentage: 85,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
});
$('#progress5').LineProgressbar({
    percentage: 95,
    fillBackgroundColor: '#0FBF61',
    height: '5px'
});

// Mixitup script
var mixer = mixitup('.my-work',{
    load: {
        filter: '.design'
    },
     animation: {
        effectsIn: 'fade translateY(-100%)'
    }
});

// Owl-Carousel-script
var next = "<i class='fas fa-arrow-left'></i>";
    var prev = "<i class='fas fa-arrow-right'></i>";
    $('.testimonials-content').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText:[
        next,
        prev
        ]
    });   

$("#typer").typer({
    strings: [
    "I am Web Designer",
    "Wordpress Developer"
    ],
   typeSpeed: 100,
   backspaceSpeed: 60,
   backspaceDelay: 800,
   repeatDelay: 1000,
   repeat: true,
   autoStart: true,
   startDelay: 100,
     });

});