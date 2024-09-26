new WOW().init();

$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });
});

$(function () {
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

$(document).ready(function () {
  var typed = new Typed(".type", {
    // Waits 1000ms after typing "First"
    strings: [
      "Responsive Design",
      "Flexbox - Grid - Bootstrap -Tailwind - VueJs",
      "Web Development",
      "PHP - MySql - Laravel",
      "APi - Git - Github",
    ],
    typeSpeed: 80,
    loop: true,
    backSpeed: 40,
    showCursor: false,
  });
});
