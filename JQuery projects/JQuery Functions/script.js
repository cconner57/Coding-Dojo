$(document).ready(function(){
  $('.result2').hide();

  $("#addclass").click(function(){
    $(".result1").addClass(".red");
  })


  $('#slidetoggle').click(function(){
    $('.result2').slideToggle('slow', function(){
    });
  });

  $('.append').click(function(){
    $('.result3').append('<p>Testing</p>');
  });
  
});
