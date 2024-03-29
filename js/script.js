const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        type: 'fraction',
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        dragSize: 20,
        el: '.swiper-scrollbar',
    },
});

const swiper_ad = new Swiper('.swiper-adaptive', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 4200,
    },

    navigation: {
        nextEl: '.swiper-adaptive-button-next',
        prevEl: '.swiper-adaptive-button-prev',
    },
});

setInterval(() => {
    if ($(window).scrollTop() > 0) {
    $('.burger').removeClass('burger--active')
    $('.header__top').removeClass('header__top--white')
    $('.header__nav-menu').removeClass('header__nav-menu--active')
    $('.container-wrapper').removeClass('container-wrapper--active')
    $('.header__top-contacts').removeClass('header__top-contacts--active')
    $('.overlay').removeClass('overlay--show')
    }
}, 0)


$('.burger').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('burger--active');
    $('.header__nav-menu').toggleClass('header__nav-menu--active')
    $('.container-wrapper').toggleClass('container-wrapper--active')
    $('.overlay').toggleClass('overlay--show')
    $('.header__top').toggleClass('header__top--white')
    $('.header__top-contacts').toggleClass('header__top-contacts--active')
})

$('.header__nav-item a').on('click', function() {
    $('.burger').removeClass('burger--active')
    $('.header__top').removeClass('header__top--white')
    $('.header__nav-menu').removeClass('header__nav-menu--active')
    $('.container-wrapper').removeClass('container-wrapper--active')
    $('.header__top-contacts').removeClass('header__top-contacts--active')
    $('.overlay').removeClass('overlay--show')
})

$('.header__nav-info a').on('click', function() {
    $('.burger').removeClass('burger--active')
    $('.header__top').removeClass('header__top--white')
    $('.header__nav-menu').removeClass('header__nav-menu--active')
    $('.container-wrapper').removeClass('container-wrapper--active')
    $('.header__top-contacts').removeClass('header__top-contacts--active')
    $('.overlay').removeClass('overlay--show')
})

$('.header__search-btn').on('click', function(){
    $('.header__search').toggleClass('header__search--active');
    $('.burger').removeClass('burger--active')
    $('.input-wrapper').addClass('input-wrapper--active');
    $('.header__top').removeClass('header__top--white')
    $('.header__nav-menu').removeClass('header__nav-menu--active')
    $('.container-wrapper').removeClass('container-wrapper--active')
    $('.header__top-contacts').removeClass('header__top-contacts--active')
    $('.overlay').removeClass('overlay--show')
})

$('.input-wrapper').on('click', function(){
    $(this).addClass('input-wrapper--clicked');
    $('.header__search').addClass('header__search--clicked')
})

$('.header__likes').on('click', function(){
    $(this).toggleClass('header__likes--active');
})

const swiper2 = new Swiper('.swiper2', {

    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    pagination: {
        el: '.swiper2-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper2-scrollbar',
    },
})

$('.swiper-slide-item').on('click', function(){
    $('.swiper-slide-item').removeClass('swiper-slide-item--active');
    $(this).addClass('swiper-slide-item--active');
})

$(function() {
    var mixer = mixitup('.portfolio__list');
})

$('.portfolio__filter-btn').on('click', function(){
    $('.portfolio__filter-btn').removeClass('portfolio__filter-btn--active');
    $(this).addClass('portfolio__filter-btn--active');
})

