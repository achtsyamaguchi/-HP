$(function () {
  function end_loader() {
    $('.loading').fadeOut(200);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    },3000)
  })
})


$(".openbtn_inner").click(function () {
  $(this).toggleClass('active');
$('.header_nav').toggleClass('show');

});
$('.header_li').click(function (){
  $('.openbtn_inner').removeClass('active'); 
  $('.header_nav').removeClass('show');
});