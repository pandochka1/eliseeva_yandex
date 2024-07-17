$(document).ready(function () {
    alert('Привет! Я работаю под 2 размера экрана: \n 1366px  и  375px! \n Таки размеры взяты из ТЗ \n А также я был создан и протестирован под Safari')
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");
  
    let updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + "/" + slidesCount);
    };
  
    $(".carousel .slider").on("init", function (event, slick) {
      $(".carousel .slider").append(sliderCounter);
      updateSliderCounter(slick);
    });
  
    $(".carousel .slider").on("afterChange", function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  
    $(".carousel .slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: "50px",
      autoplay: true,
      autoplaySpeed: 1500,
    });
    $(".carousel .slick-prev").text("<");
    $(".carousel .slick-next").text(">");

    
      checkMedia();
      $(window).on('resize', function() {
        checkMedia();
      });
    
      function checkMedia() {
        if (window.matchMedia('(max-width: 375px)').matches) {
          if (location.pathname == '/') {
            $(".carousel .slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: "50px",
                autoplay: true,
                autoplaySpeed: 1500,
            });
            $(".carousel .slick-prev").text("<");
            $(".carousel .slick-next").text(">");
          }
        }
      }
  });
  