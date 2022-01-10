//--------------------------Бургер меню - В блоке header----------------------//
$(document).ready(function() {
$('.header_burger').click(function(event){
$('.header_burger,.navigation').toggleClass('active');
$('.body').toggleClass('lock');
});
});
  
//--------------------------slick - slider -  в блоке header----------------------//
  $('.header-description').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows:false,
    dots:true,
    verticalSwiping: true

});

//--------------------------slick - slider - В блоке отзывов-----(slick-slider-reviews)---------------//
$('.slide-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  dots:true
});


//--------------------------slick - slider - В блоке last chance----------------------//
$('.furnituresail-box').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  autoplay: true,
  autoplaySpeed: 1000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4, 
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },

 {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  
  
});