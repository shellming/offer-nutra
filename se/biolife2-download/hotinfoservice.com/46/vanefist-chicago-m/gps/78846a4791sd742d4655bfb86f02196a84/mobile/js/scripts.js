$(document).ready(function(){
    $('.slider-content').slick({
        infinite:true,
        speed: 900,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        prevArrow:'.slider-arrow-left',
        nextArrow:'.slider-arrow-right'
    });
});