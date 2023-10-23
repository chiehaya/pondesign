
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
    // ヘッダー
    $(function(){
        $(window).on('scroll',function(){
            const top = $(this).scrollTop();
            const mainView = $('.js-main-view').outerHeight() - 50;
            const header = $('.js-header').outerHeight();
            if (mainView <= top) {
                $('.js-header').addClass('is-fixed');
            }
            else {
                $('.js-header').removeClass('is-fixed');
            }
        });
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
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay:  3000
        },
        effect: 'fade',
    });
    // ページトップへ戻るボタン
    $(function () {
        const pageTop = $(".page-top");
        const mainView = $('.js-main-view').outerHeight() - 300;
        pageTop.hide(); // 最初はボタンを非表示にする
        $(window).scroll(function () {
        if ($(this).scrollTop() > mainView) {
            pageTop.fadeIn(); // 指定以上スクロールしたらボタンをフェードイン
        } else {
            pageTop.fadeOut(); // 指定以下になったらボタンをフェードアウト
        }
        });
        pageTop.click(function () {
        $("body,html").animate(
            {
              scrollTop: 0, // 上から0pxの位置に戻る
            },
            500 // 500ミリ秒かけて戻る
        );
        return false;
        });
    });

});
