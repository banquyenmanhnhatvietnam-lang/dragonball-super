// JavaScript Document

// MOVIE

let mySwiper1 = new Swiper('.swiper_MV', { 

    loop: true,
    speed: 600,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    
    allowTouchMove: true, /* ←swipe可否。複数枚になった場合は true or 削除 */

    pagination: {
        el: '.swiper-pagination.MVpgn',
        clickable: true,
        hiddenClass: 'swiper-pagination-hidden',
    },

    navigation: {
        nextEl: '.MV-next',
        prevEl: '.MV-prev',
        disabledClass: 'swiper-button-disabled'
    },
});

