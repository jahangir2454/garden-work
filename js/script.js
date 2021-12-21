$(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<span class="prev prev2"><i class="fas fa-chevron-left right"></i></span>',
    nextArrow:
      '<span class="prev next2"><i class="fas fa-chevron-right right"></i></span>',
  });
  $(".oure").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsData: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    customPaging: function (oure, index) {
      var num = index + 1;
      return '<span class="dot">' + num + "</span>";
    },
  });
  $(".projects").slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  });
  $(".testmonial").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsData: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    customPaging: function (oure, index) {
      var num = index + 1;
      return '<span class="dot">' + 0 + num + "</span>";
    },
  });
});
