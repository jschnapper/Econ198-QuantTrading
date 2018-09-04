$(document).ready(function() {

  $(".menu-container").click(function() {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".dropdown-container").slideUp();
      $(".menu-container .bar").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".dropdown-container").slideDown();
      $(".menu-container .bar").addClass("open");
    }
  })

});
