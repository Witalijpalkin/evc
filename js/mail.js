
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(document.querySelector('.hero-swiper'), {
    slidesPerView: 1,
    speed: 300,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev',
    }
  });
  console.log(swiper);
});

let howTabs = document.querySelectorAll('.how__link');
let tabsItem = document.querySelectorAll('.how__content-item');

howTabs.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    howTabs.forEach(function (btn) { btn.classList.remove('how__link--active'); });
    e.currentTarget.classList.add('how__link--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__content-item--active'); });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content-item--active');
  });
});

new Accordion('.accordion-container');

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-nav__link');


burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-nav--active');

  document.body.classList.toggle('stop-scroll');
    if (burger.getAttribute('aria-label') === 'меню') {
      burger.setAttribute('aria-label', 'Закрыть меню');
    } else {
      burger.setAttribute('aria-label', 'меню');
    }

});


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    burger.setAttribute('aria-label', 'открыть меню');
    menu.classList.remove('header-nav--active');
    document.body.classList.remove('stop-scroll');

  });
});

document.querySelector('.search').addEventListener('click', function () {
  document.querySelector('.header__form').classList.add('header__form--active');
  this.classList.add('active');
});
document.querySelector('.form-close').addEventListener('click', function () {
  let form = document.querySelector('.header__form');
  form.classList.remove('header__form--active');
  form.querySelector('input').value = "";
  document.querySelector('.search').classList.remove('active');
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let form = document.querySelector('.header__form');

  if (!target.closest('.form-container')) {
    form.classList.remove('form__active');
    form.querySelector('input').value = "";
    document.querySelector('.search').classList.remove('active');;
  };
});
