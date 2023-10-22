
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ドロワーメニュー
    const hamburger = $(".js-hamburger");
    hamburger.on("click", function () {
        if ($('.js-hamburger').hasClass('is-open')){
            $('.js-sp-nav').fadeOut();
            $(this).removeClass('is-open');
        }else {
            $('.js-sp-nav').fadeIn();
            $(this).addClass('is-open')
        }
    });
    // swiper
    const swiper = new Swiper(".js-swiper",{
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay:  3000
        },
        effect: 'fade',
    
    });

});
