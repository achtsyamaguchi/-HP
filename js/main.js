function endLoading(){
  $('.loading').fadeOut(700);
}

$(window).on('load', function () {
  setTimeout(function () {
    endLoading();
  },3000)
})



$(".openbtn_inner").click(function () {
  $(this).toggleClass('active');
$('.header_nav').toggleClass('show');

});
$('.header_li').click(function (){
  $('.openbtn_inner').removeClass('active'); 
  $('.header_nav').removeClass('show');
});