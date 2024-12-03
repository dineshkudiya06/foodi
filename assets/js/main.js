$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  items: 3,
  nav: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>', // Custom Next arrow
    '<i class="fa-solid fa-angle-right"></i>', // Custom Previous arrow
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
// Preloader JS
function preloader_fade() {
  $("#preloader").fadeOut("slow");
}
$(document).ready(function () {
  window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
});
$(document).ready(function () {
  // Open sidebar
  $(".fa-bars").click(function () {
    $(".mobile-menu").addClass("sidebar-show ");
    $("body").addClass("background-shadow");
  });
  // Close sidebar
  $(".fa-xmark").click(function () {
    $(".mobile-menu").removeClass("sidebar-show");
    $("body").removeClass("background-shadow");
  });
});
