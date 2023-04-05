$(function () {

  // $(".owl-carousel").owlCarousel();


  // $(document).ready(function(){
  //   $('.owl-carousel').owlCarousel();
  // });



  $(".menu, .footer").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.menu__item a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('lock');
    $('.burger').toggleClass('burger--active');
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




  var $range = $(".catalog-filters__input");
  var $inputFrom = $(".catalog-filters__from");
  var $inputTo = $(".catalog-filters__to");
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

  function updateInputs(data) {
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


  $('.catalog-products__select, .product-gallery__input').styler();


  $(".star__rating").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    fullStar: true,
    readOnly: true
  });

  $(".rewiev__star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    fullStar: true,
    readOnly: false
  });

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




  // function funonload() {
  //     $('.slick-prev').toggleClass('slick-prev--active');
  // } 
  // window.onload = funonload;


  // $(document).ready(function () {
  //     $(".slick-prev--active").focus();
  // });


  // var mixer = mixitup('.top__content');



});



// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });



















 // поліфіл для метода forEach IE 11
 if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
};
// catalog
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--active');
    this.classList.add('dropdown__button--active');
  });
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key == 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });
});

 



//  cart

//  const cart = document.querySelector('.cart__wrapper');
//  document.querySelector('.cart').addEventListener('click', function() {
//    cart.classList.add('cart__wrapper--active');

//  });

//  document.querySelector('.cart__close--icon').addEventListener('click', function(e) {
//    e.stopPropagation();
//    cart.classList.remove('cart__wrapper--active');

//  });



// cart

document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.cart');
  const cartList = document.querySelector('.cart__wrapper');
  cart.addEventListener('click', function () {
    cartList.classList.add('cart__wrapper--active');

  });



  document.querySelector('.cart__close--icon').addEventListener('click', function (e) {
    e.stopPropagation();
    cartList.classList.remove('cart__wrapper--active');
  });

  // document.addEventListener('click', function (e) {
  //   if (e.target !== cart && e.target !== cartList) {
  //     // e.stopPropagation();
  //     console.log(e.target);
  //     // burger.classList.remove('burger--active');
  //     cartList.classList.remove('cart__wrapper--active');
  //     // bodyLock.classList.remove('lock');
  //   };
  // });
});







// tabs

document.querySelectorAll('.tabs__link').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__link').forEach(
      (child) => child.classList.remove('tabs__link--active')
    );
    document.querySelectorAll('.tabs__item').forEach(
      (child) => child.classList.remove('tabs__item--active')
    );

    item.classList.add('tabs__link--active');
    document.getElementById(id).classList.add('tabs__item--active');

  })
);

// document.querySelector('.tabs__link').click;






// filters

const filterButtons = [...document.querySelectorAll('.catalog-products__btn')];
filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector('.catalog-products__btn.catalog-products__btn--active').classList.remove('catalog-products__btn--active');
    btn.classList.add('catalog-products__btn--active');
    if (btn.classList.contains('catalog-products__btn--active') && btn.classList.contains('list__btn')) {
      document.querySelectorAll('.catalog-products__item').forEach(el => el.classList.add('catalog-products__item--list'));
    }
    else {
      document.querySelectorAll('.catalog-products__item').forEach(el => el.classList.remove('catalog-products__item--list'));
    }
  })
});

document.querySelectorAll('.catalog-filters__item').forEach(function (catalogFilter) {
  const filterButton = catalogFilter.querySelector('.catalog-filters__description');
  const filterList = catalogFilter.querySelector('.filters-list');
  filterButton.addEventListener('click', function() {
    this.classList.toggle('catalog-filters__description--active');
    filterList.classList.toggle('filters-list--active');
  });
});



// mobile search

document.querySelector('.mobile__search').addEventListener('click', function() {
  document.querySelector('.search').classList.toggle('search--active');
  
});



// переміщення 

const mobileUser = document.querySelector('.mobile__user');
const headerDropdown = document.querySelector('.header-dropdown');
const logo = document.querySelector('.header__logo');
const search = document.querySelector('.search');
const headerBottom = document.querySelector('.header__bottom');


window.addEventListener('resize', function() {
  if (window.innerWidth <= 992) {
    document.querySelector('.header__bottom').append(document.querySelector('.search'));
  }
  if (window.innerWidth <= 768) {
    document.querySelector('.mobile__user').after(document.querySelector('.header-dropdown'));
  }
  else {
    document.querySelector('.header__logo').after(document.querySelector('.header-dropdown'));
    document.querySelector('.header-dropdown').after(document.querySelector('.search'));
  };
});












document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile');
  const bodyLock = document.querySelector('body');
  const menuClose = document.querySelector('.mobile__close');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile--active');
    bodyLock.classList.add('lock');
  });

  menuClose.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.remove('mobile--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      // burger.classList.remove('burger--active');
      mobileMenu.classList.remove('mobile--active');
      bodyLock.classList.remove('lock');
    }
  });

});





var swiper1 = new Swiper('.product-gallery__slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

});

var swiper2 = new Swiper('.slider__container', {

  loop: true,
  autoplay: true,
  // navigation: {
  //   enabled: false
  // },
  
  breakpoints: {
    320: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    768.2: {
      pagination: {
        enabled: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },

    },
  }

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // }
});

var swiper3 = new Swiper('.recent__slider', {

  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  }

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // }
});





var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);












