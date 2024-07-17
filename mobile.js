$(document).ready(function () {
  $(" .transformation_slider .slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  });

  $(" .transformation_slider .slick-prev").text("<");
  $(" .transformation_slider .slick-next").text(">");
});




