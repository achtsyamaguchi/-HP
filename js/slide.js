$(function () {
    $('.slide_photos').slick({
      autoplaySpeed: 5000,
      speed: 1500,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        speed: 600,
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '0%',
      }
    }]
    })

});