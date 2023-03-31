/**loader**/
$(window).on("load", function(){
    $('.bouncing-loader').fadeOut(400);
});
/**hover projects**/
$( ".img-lien1, .h2-lien1" ).hover(function() {
  $("main .h2-lien1").css("color","transparent").css("-webkit-text-stroke","2px #000000").css("transition","0.4s ease-out");
$(".img-lien1").css("transform","scale(1.05)").css("transition","0.4s ease-out");
$("main .type-p.p1").css("opacity","0").css("transition","0.4s ease-out");}, function(){
    $("main .h2-lien1").css("-webkit-text-stroke","0px #000000").css("color","#000000").css("transition","0.4s ease-out");
    $(".img-lien1").css("transform","scale(1)").css("transition","0.4s ease-out");
    $("main .type-p.p1").css("opacity","1").css("transition","0.4s ease-out");
});
$( ".img-lien2, .h2-lien2" ).hover(function() {
  $("main .h2-lien2").css("color","transparent").css("-webkit-text-stroke","2px #000000").css("transition","0.4s ease-out");
$(".img-lien2").css("transform","scale(1.05)").css("transition","0.4s ease-out");
$("main .type-p.p2").css("opacity","0").css("transition","0.4s ease-out");}, function(){
    $("main .h2-lien2").css("-webkit-text-stroke","0px #000000").css("color","#000000").css("transition","0.4s ease-out");
    $(".img-lien2").css("transform","scale(1)").css("transition","0.4s ease-out");
    $("main .type-p.p2").css("opacity","1").css("transition","0.4s ease-out");
});
$( ".img-lien3, .h2-lien3" ).hover(function() {
  $("main .h2-lien3").css("color","transparent").css("-webkit-text-stroke","2px #000000").css("transition","0.4s ease-out");
$(".img-lien3").css("transform","scale(1.05)").css("transition","0.4s ease-out");
$("main .type-p.p3").css("opacity","0").css("transition","0.4s ease-out");}, function(){
    $("main .h2-lien3").css("-webkit-text-stroke","0px #000000").css("color","#000000").css("transition","0.4s ease-out");
    $(".img-lien3").css("transform","scale(1)").css("transition","0.4s ease-out");
    $("main .type-p.p3").css("opacity","1").css("transition","0.4s ease-out");
});
$( ".img-lien4, .h2-lien4" ).hover(function() {
  $("main .h2-lien4").css("color","transparent").css("-webkit-text-stroke","2px #000000").css("transition","0.4s ease-out");
$(".img-lien4").css("transform","scale(1.05)").css("transition","0.4s ease-out");
$("main .type-p.p4").css("opacity","0").css("transition","0.4s ease-out");}, function(){
    $("main .h2-lien4").css("-webkit-text-stroke","0px #000000").css("color","#000000").css("transition","0.4s ease-out");
    $(".img-lien4").css("transform","scale(1)").css("transition","0.4s ease-out");
    $("main .type-p.p4").css("opacity","1").css("transition","0.4s ease-out");
});
$( ".img-lien5, .h2-lien5" ).hover(function() {
  $("main .h2-lien5").css("color","transparent").css("-webkit-text-stroke","2px #000000").css("transition","0.4s ease-out");
$(".img-lien5").css("transform","scale(1.05)").css("transition","0.4s ease-out");
$("main .type-p.p5").css("opacity","0").css("transition","0.4s ease-out");}, function(){
    $("main .h2-lien5").css("-webkit-text-stroke","0px #000000").css("color","#000000").css("transition","0.4s ease-out");
    $(".img-lien5").css("transform","scale(1)").css("transition","0.4s ease-out");
    $("main .type-p.p5").css("opacity","1").css("transition","0.4s ease-out");
});
/**hover liens**/
$( ".menu a, .next-project" ).hover(function() {
  $(this).css("color","#999999").css("transition","0.2s ease-out");
  $(".cursor1").css("height","55px").css("width","55px").css("transition","0.2s ease-out");
  $(".cursor2").css("height","0px").css("width","0px").css("transition","0.2s ease-out");
  }, function(){
    $(this).css("color","#000000").css("transition","0.2s ease-out");
    $(".cursor1").css("height","30px").css("width","30px").css("transition","0.2s ease-out");
    $(".cursor2").css("height","6px").css("width","6px").css("transition","0.2s ease-out");
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
    }, 100);
  })
