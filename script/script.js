
const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

// вход
const logElem = document.querySelector('.header__login');
const logOnBlock = document.querySelector('.login');
const logForm = document.querySelector('.login-form');
const emailLogInput = document.querySelector('.login-email');
const passwordLogInput = document.querySelector('.login-password');

//регистрация
const regElem = document.querySelector('.header__register');
const regOnBlock = document.querySelector('.register');
const regForm = document.querySelector('.register-form');
const emailRegInput = document.querySelector('.register__email');
const passwordRegInput = document.querySelector('.register__password');

// поиск
const headerSearch = document.querySelector('.header__search');
const searchSmall = document.querySelector('.search__small');
const inputHeader = document.querySelector('.header__input');

// покупки
const bagElem = document.querySelector('.header__bag');

// личный кабинет
const personElem = document.querySelector('.header__avatar-small');
const personBigBlock = document.querySelector('.header__photo');
const userNameElem = document.querySelector('.header__avatar-name');

// читать больше о винах
const mainSubtitleMore = document.querySelector('.main__subtitle-hide');
const mainMore = document.querySelector('.main__more');
const mainBtnMore = document.querySelector('.main__text');
const mainBtnClose = document.querySelector('.main__close');

// коллекция вин
const futuredBtn = document.querySelector('.futured__more');
const futuredBlock = document.querySelector('.futured__block');



const listUsers = [{
      name: 'Valientin',
      photo: 'https://n1s1.elle.ru/e9/2b/bf/e92bbf78184a1168e43d2f60db7c6b8b/660x858_1_064ee3d402273445e0674221c253e7ae@800x1040_0xc35dbb80_13873213741517414727.jpg',
      email: 'valek917@yandex.ru',
      password: '123456'
   },
   {
      name: 'Sofya',
      photo: 'https://cdn.photosight.ru/img/d/0e7/6577150_large.jpg',
      email: 'vel09vel@rambler.ru',
      password: '12345'
   }
];
console.log(listUsers);

const setUsers = {
   user: null,

   //регистрация
   signUp(email, password) {

      // проверка на валидность
      if (!regExpValidEmail.test(email)) {
         alert('email не валид');
         return;
      }

      // прок=верка, чтобы нельзя было зайти без ввода данных
      if (!email.trim() || !password.trim()) {
         alert('Введите данные')
         return;
      };

      // получение пользователя по email и доваляем пользователя 
      if (!this.getUser(email)) {
         const user = {
            name: email.substring(0, email.indexOf('@')),
            email,
            password
         };
         // добавляем пользователя
         listUsers.push(user);
         // авторизуется пользователь успешно
         this.autorizedUser(user);
         // добавляем имя пользователя
         userNameElem.textContent = user.name;
         
         console.log(userNameElem);
      } else {
         alert('Пользователь с таким email уже зарегестрирован')
      }
   },

   

   // перебираем массив и ищем пользователя с таким email
   getUser(email) {
      return listUsers.find(item => item.email === email)
   },

   // записываем user в user
   autorizedUser(user) {
      this.user = user;
   }
};


const init = () => {
   // открытие модального окна регистрации
   regElem.addEventListener('click', () => {
      regOnBlock.classList.toggle('register__visible');
      document.body.style = 'overflow: hidden';
   });

   // закрытие модального окна регистрации
   window.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target == regOnBlock || target.closest('.register__exit')) {
         regOnBlock.classList.remove('register__visible');
      } else if (target.closest('.register__button')) {
         regOnBlock.classList.remove('register__visible');
         const emailValue = emailRegInput.value;
         const passwordValue = passwordRegInput.value;

         setUsers.signUp(emailValue, passwordValue);

         // открытие личного кабинета
         personElem.classList.add('avatar__small-visible');
         personBigBlock.classList.add('header__photo-visible');
      }
      document.body.style = 'overflow: visible';
   });

   // открытие модального окна входа
   logElem.addEventListener('click', () => {
      logOnBlock.classList.toggle('login__visible');
      document.body.style = 'overflow: hidden';
   });

   // закрытие модального окна входа
   document.addEventListener('click', (e) => {
      const target = e.target;
      if (target == logOnBlock || target.closest('.login__exit') || target.closest('.login__button')) {
         logOnBlock.classList.remove('login__visible');
      }
   });

   // открытие модального окна поиска
   searchSmall.addEventListener('click', () => {
      headerSearch.classList.add('header__search-pos');
      searchSmall.classList.add('search__small-hide');
   });

   // закрытие открытие модального окна поиска
   document.addEventListener('mousedown', (e) => {
      if (e.target.closest('.header__search') === null || e.target.closest('.header__btn')) {
         headerSearch.classList.remove('header__search-pos');
         searchSmall.classList.remove('search__small-hide');
         inputHeader.value = '';
      }
   });

   // открытие личного кабинета
   personElem.addEventListener('click', () => {
      personElem.classList.add('avatar__small-visible');
      personBigBlock.classList.add('header__photo-visible');

   });

   // закрытиеличного кабинета
   document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.header__avatar-small') === null || target.closest('.header__avatar-btn')) {
         personElem.classList.remove('avatar__small-visible');
         personBigBlock.classList.remove('header__photo-visible');
      }
   });

   // открытие дополнительной секции вин
   futuredBtn.addEventListener('click', () => {
      futuredBlock.insertAdjacentHTML('beforeend', `
         <div class="futured__box">
            <div class="size">
               <img src="./image/futured/5.png" alt="1">
            </div>
            <div class="futured__subtitle">2008 Cabernet</div>
            <div class="futured__price">$500.00 <span class="futured__price-line">$450.00</span></div>
         </div>
         <div class="futured__box">
            <div class="size">
               <img src="./image/futured/6.png" alt="1">
            </div>
            <div class="futured__subtitle">Mazzei Siepi 2016</div>
            <div class="futured__price">$500.00 <span class="futured__price-line">$450.00</span></div>
         </div>
         <div class="futured__box">
            <div class="size">
               <img src="./image/futured/7.png" alt="1">
            </div>
            <div class="futured__subtitle">Penfolds uncorks </div>
            <div class="futured__price">$400.00 <span class="futured__price-line">$360.00</span></div>
         </div>
         <div class="futured__box">
            <div class="size">
               <img src="./image/futured/8.png" alt="1">
            </div>
            <div class="futured__subtitle">2012 Jacob's</div>
            <div class="futured__price">$1000.00<span class="futured__price-line">$950.00</span></div>
         </div>
      `);
   });

   // открыть больше информации о винах
   mainBtnMore.addEventListener('click', () => {
      mainSubtitleMore.classList.remove('main__subtitle-hide');
      mainBtnMore.classList.add('main__more');
      mainBtnClose.classList.remove('main__close');
   });

   // открыть больше информации о винах
   mainBtnClose.addEventListener('click', () => {
      mainSubtitleMore.classList.add('main__subtitle-hide');
      mainBtnMore.classList.remove('main__more');
      mainBtnClose.classList.add('main__close');
   });
}


// инициализация после полной загрузки сайта
document.addEventListener('DOMContentLoaded', () => {
   init();
});












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