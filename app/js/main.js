$(function(){

  $(".menu, .footer").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


  $('.menu__item a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('lock');
    $('.burger').toggleClass('burger--active');
});



    $('.hero__slider').slick({
        dots: true,
        arrows: true,

        

        

        prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink:href="images/sprite.svg#prev-arrow-icon"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink:href="images/sprite.svg#next-arrow-icon"></use></svg></button>',

        responsive: [
          // {
          //   breakpoint: 560,
          //   settings: 'unslick'
          // }
        ]
    });

    $('.testimonials__slider').slick({
        dots: true,
        arrows: true,

        prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink:href="images/sprite.svg#prev-arrow-icon"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink:href="images/sprite.svg#next-arrow-icon"></use></svg></button>',

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true
            }
          }
        ]
    });



    $('.restaurant__content').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 5000,
          settings: 'unslick'
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        }
      ]
    });


    // $('.filters__input').ionRangeSlider({
    //   type: "double",
    //   onStart: function (data) {
    //     $('.filters__from').text(data.from);
    //     $('.filters__to').text(data.to);
    //   },
    //   onChange: function (data) {
    //     $('.filters__from').text(data.from);
    //     $('.filters__to').text(data.to);
    //   },
    // })




    var $range = $(".filters__input");
    var $inputFrom = $(".filters__from");
    var $inputTo = $(".filters__to");
    var instance;
    var min = 0;
    var max = 1000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        // skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });


    $('.filters__select').styler();




    // if (window.matchMedia("(min-width: 400px)").matches) {
     

    //  $('.restaurant__content').slick({

    //   responsive: [
    //     {
    //       breakpoint: 5000,
    //       settings: 
    //       {
    //         dots: true,
    //         infinite: false,
    //         speed: 300,
    //         slidesToShow: 6,
    //         slidesToScroll: 1
            
    //       },
    //       unslick
    //     }
    //   ]

    // })

    // } else {
     

    //   $('.restaurant__content').slick({
      
    //   responsive: [
       
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true,
    //         arrows: false
    //       }
    //     }
    //   ]
    // })

    // };
    



    function funonload() {
        $('.slick-prev').toggleClass('slick-prev--active');
    } 
    window.onload = funonload;


    $(document).ready(function () {
        $(".slick-prev--active").focus();
    });


    var mixer = mixitup('.popular__content');
});



document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu__list--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});

// document.addEventListener('click', function (e) {
//   if (e.target !== burger && e.target !== mobileMenu) {
//     burger.classList.remove('burger--active');
//     mobileMenu.classList.remove('menu__list--active');
//     bodyLock.classList.remove('lock');
//   }
// });




