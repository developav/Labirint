const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 600,
    spaceBetween: 0,
    slidesPerView: 2,
    navigation: {
        nextEl: '.main-btn',
        prevEl: '.main-btn',
      },
    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // when window width is >= 640px
        1940: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      },
   
  });
  swiper.on('slideChange', function () {
    console.log('slide changed');
  });


