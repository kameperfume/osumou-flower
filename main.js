'use strict';

{
  const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};