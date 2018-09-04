$(document).ready(function() {

  $(".menu-container").click(function() {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".dropdown-container").removeClass("open");
      $(".menu-container .bar").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".dropdown-container").addClass("open");
      $(".menu-container .bar").addClass("open");
    }
  })

});
