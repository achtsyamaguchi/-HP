$(function () {
  function end_loader() {
    $('.loading').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})


$(".openbtn_inner").click(function () {
  $(this).toggleClass('active');/*ハンバガメニュークリックで3本線と×が入れ替わる*/
$('.header_nav').toggleClass('show');/*クリック時navにshowつけてレスポンシブでメニューが開くようにする設定*/

});
$('.header_li').click(function (){
  $('.openbtn_inner').removeClass('active'); 
  $('.header_nav').removeClass('show');
  
});