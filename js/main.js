$( document ).ready(function() {
  $('.apartment-slider-image').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    autoplay:true,
    autoplaySpeed:1500,
  });
  $('.main-slider__container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2000,
  });
  $('.project-news__list-news').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    autoplay:true,
    autoplaySpeed:2000,
  });
  
  
});