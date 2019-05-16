$(document).ready(function() {
  //   $('img').bind('mouseenter mouseleave', function() {
  //     $(this).attr({
  //         src: $(this).attr('data-other-src')
  //         , 'data-other-src': $(this).attr('src')
  //     })
  // });

  // $('.swap').hover(function () {
  //         this.src = 'https://placeimg.com/320/240/nature/grayscale';
  //     }, function () {
  //         this.src = 'https://placeimg.com/320/240/nature/grayscale';
  //     });

  $("img")
  .on( "mouseenter", function() {
     $(this).attr("src", $(this).data('hover-src'));
 })
 .on( "mouseleave", function() {
     $(this).attr("src", $(this).data('normal-src'));
});
