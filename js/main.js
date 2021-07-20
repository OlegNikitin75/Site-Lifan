new WOW().init();

$(function () {
    $('.slider').slick({
        autoplay: 5000,
        fade: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        responsive: [{
            breakpoint: 441,
            settings: {
                arrows: false

            }
        }]
    });
});


$(function () {
    $('.task__slider').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>'

    });
});

$(function () {
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.photo__gall', {
        autoplay: 7000,
        transition: 'fade',
        imageCrop: true,
    });

});

$(function () {
    $('.header__menu-btn').on('click', function () {
        $('.menu').slideToggle();
    });
});