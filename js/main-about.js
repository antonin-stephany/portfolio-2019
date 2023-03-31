/**loader**/
$(window).on("load", function(){
    $('.bouncing-loader').fadeOut(400);
});
/**hover liens**/
$( ".menu a, .next-project" ).hover(function() {
  $(this).css("color","#666666").css("transition","0.2s ease-out");
  $(".cursor1-about").css("height","55px").css("width","55px").css("transition","0.2s ease-out");
  $(".cursor2-about").css("height","0px").css("width","0px").css("transition","0.2s ease-out");
  }, function(){
    $(this).css("color","#ffffff").css("transition","0.2s ease-out");
    $(".cursor1-about").css("height","30px").css("width","30px").css("transition","0.2s ease-out");
    $(".cursor2-about").css("height","6px").css("width","6px").css("transition","0.2s ease-out");
});
/**cursor**/
$(document)
  .scroll(function() {
    $(document).trigger('mousemove');
  })
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 150);
  })
