# eliseeva_yandex

Данный проект разработан в качестве тестового задания.  Верстка выполнена только под размеры экрана 1336px и 375pх.   Внутри проекта приложены видео проекта под указанные выше размеры.    Разработка велась под браузер Safari.   Есть ряд недочетов: 
	- первый слайдер в мобильной версии (изначально неверно выполнила верстку блока, в следствии чего появились ошибки, поэтому есть отхождения от представленного макета; 
	- во втором слайдер не смогла победить медиа запрос в JS, поэтому, чтобы проверить отображение слайда в мобильной версии, необходимо снять комментарии и закомментировать строки для 1336px. 


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
