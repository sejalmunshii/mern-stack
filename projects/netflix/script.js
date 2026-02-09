$(document).ready(function () {
  $(".p1, .p2, .p3, .p4, .p5, .p6").hide();

  $(".b1").click(() => $(".p1").toggle());
  $(".b2").click(() => $(".p2").toggle());
  $(".b3").click(() => $(".p3").toggle());
  $(".b4").click(() => $(".p4").toggle());
  $(".b5").click(() => $(".p5").toggle());
  $(".b6").click(() => $(".p6").toggle());
});
