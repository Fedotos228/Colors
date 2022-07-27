import { burger, isWebp, sliders } from './modules/functions.js'

isWebp();
sliders();

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header')
    const burgerMenu = document.querySelector('.burger')
    let menu = document.querySelector('.header__nav')
    const headerRight = document.querySelector('.header__right')

    let w = window.innerWidth
    if (w <= 992) {
        let burgerBody = document.createElement('div');
        burgerBody.classList.add('burger__body')
        header.querySelector('.header__container').append(burgerBody)
        burgerBody.innerHTML = '';
        burgerBody.appendChild(menu)
        burgerBody.appendChild(headerRight)
        burger(burgerMenu, burgerBody, header);

    }

    const withSubmenu = document.querySelector('.with-submenu')
    const arrow = document.querySelector('.with-submenu a span')
    const submenu = document.querySelector('.submenu')
    withSubmenu.addEventListener('click', () => {
        submenu.classList.toggle('open')
        arrow.classList.toggle('rotate')

    })

    new Swiper('.slider-clients__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        // touchRatio: 0,
        // simulateTouch: false,
        loop: true,
        navigation: {
            nextEl: '.slider-clients-controls__arrows .slider-arrow__next',
            prevEl: '.slider-clients-controls__arrows .slider-arrow__prev',
        },

        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //         autoHeight: true,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //     1268: {
        //         slidesPerView: 4,
        //         spaceBetween: 30,
        //     },
        // },
    })
})