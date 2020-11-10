




import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   centeredSlides: true,
   loop: true,
   loopedSlides: 3,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
});

const swiper1 = new Swiper('.swiper-container1', {
   slidesPerView: 1,
   centeredSlides: true,
   loop: true,
   loopedSlides: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
});

const swiper2 = new Swiper('.swiper-container2', {
   slidesPerView: 1,
   centeredSlides: true,
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});