$(document).ready(function() {
  $('#change0').click(function() {
    if ($(this).attr("src") === "img/cat0.png")
      $(this).attr("src", "img/ninja0.png");
    else if ($(this).attr("src") === "img/ninja0.png")
      $(this).attr("src", "img/cat0.png");
  })

  $('#change1').click(function() {
    if ($(this).attr("src") === "img/cat1.png")
      $(this).attr("src", "img/ninja1.png");
    else if ($(this).attr("src") === "img/ninja1.png")
      $(this).attr("src", "img/cat1.png");
  })

  $('#change2').click(function() {
    if ($(this).attr("src") === "img/cat2.png")
      $(this).attr("src", "img/ninja2.png");
    else if ($(this).attr("src") === "img/ninja2.png")
      $(this).attr("src", "img/cat2.png");
  })

  $('#change3').click(function() {
    if ($(this).attr("src") === "img/cat3.png")
      $(this).attr("src", "img/ninja3.png");
    else if ($(this).attr("src") === "img/ninja3.png")
      $(this).attr("src", "img/cat3.png");
  })

  $('#change4').click(function() {
    if ($(this).attr("src") === "img/cat4.png")
      $(this).attr("src", "img/ninja4.png");
    else if ($(this).attr("src") === "img/ninja4.png")
      $(this).attr("src", "img/cat4.png");
  })

});
