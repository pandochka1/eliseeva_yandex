$(document).ready(function () {
  alert('Привет! Я работаю под 2 размера экрана: \n 1366px  и  375px! \n Таки размеры взяты из ТЗ \n А также я был создан и протестирован под Safari')
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




