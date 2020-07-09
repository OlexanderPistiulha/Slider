window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');



    showSlides(slideIndex);

    // счетчик количества слайдов (на добавление '0' для слайдов < 10)
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }


    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        if (n > slides.length) {
            slides.forEach((item) => item.classList.add('hide'));
            slides.forEach((item) => item.classList.remove('show'));
            slides[slides.length - 1].classList.add('show');
        }

        slides[slideIndex - 1].classList.remove('hide');
        slides[slideIndex - 1].classList.add('show');

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n, n);
    }

    next.addEventListener('click', function () {
        plusSlides(1);
    });
});