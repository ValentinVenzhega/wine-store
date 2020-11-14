

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

const logElem = document.querySelector('.header__login');
const regElem = document.querySelector('.header__register');

const searchElem = document.querySelector('.header__search');
const bagElem= document.querySelector('.header__bag');

const regOnBlock = document.querySelector('.register');
const logOnBlock = document.querySelector('.login');
const searchBigOnBlock = document.querySelector('.header__upsearch');
const searchSmallOnBlock = document.querySelector('.header__search');

const regOutBlock = document.querySelector('.register__exit');
const logOutBlock = document.querySelector('.login__exit');

// const regButton = document.querySelector('.register__button');
// const logButton = document.querySelector('.login__button');


const listUsers = [
   {
      name: 'Valientin',
      age: 20,
      photo: 'https://n1s1.elle.ru/e9/2b/bf/e92bbf78184a1168e43d2f60db7c6b8b/660x858_1_064ee3d402273445e0674221c253e7ae@800x1040_0xc35dbb80_13873213741517414727.jpg',
      email: 'valek917@yandex.ru',
      password: '123456'
   },
   {
      name: 'Sofya',
      age: 24,
      photo: 'https://cdn.photosight.ru/img/d/0e7/6577150_large.jpg',
      email: 'vel09vel@rambler.ru',
      password: '12345'
   } 

];
console.log( listUsers);

const setUsers = {
   user: null,

   logIn(name, photo, email, password) {

   },

   logOut() {

   }
};


// открытие модального окна регистрации
regElem.addEventListener('click', () => {
      regOnBlock.classList.toggle('register__visible');
      document.body.style = 'overflow: hidden';
});

// закрытие модального окна регистрации
window.addEventListener('click', (e) => {
   const target = e.target;
   if(target == regOnBlock || target.closest('.register__exit') || target.closest('.register__button')) {
      regOnBlock.classList.remove('register__visible');
      

   }
});

// открытие модального окна входа
logElem.addEventListener('click', () => {
   logOnBlock.classList.toggle('login__visible');
   document.body.style = 'overflow: hidden';
});

// закрытие модального окна входа
document.addEventListener('click', (e) => {
   const target = e.target;
      if(target == logOnBlock || target.closest('.login__exit') || target.closest('.login__button')) {
         logOnBlock.classList.remove('login__visible');
      }
});


// открытие модального окна поиска
searchElem.addEventListener('click', () => {
   searchBigOnBlock.classList.add('upsearch__visible');
   searchElem.classList.add('search__hide');


});

// закрытие модального окна поиска
document.addEventListener('click', (e) => {
   const target = e.target;
      if(target.closest('.header__search') === null || target.closest('.header__btn')) {
         searchBigOnBlock.classList.remove('upsearch__visible');
         searchElem.classList.remove('search__hide');
      }
});