var swiper = new Swiper('.sw-slide-product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.sw-slide-product-slider__item').eq(index).data('target');

                console.log(target);

                $('.sw-slide-product-img__item').removeClass('active');
                $('.sw-slide-product-img__item#'+ target).addClass('active');
            }
        }

    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.sw-slide-product-slider__item').eq(index).data('target');

        console.log(target);

        $('.sw-slide-product-img__item').removeClass('active');
        $('.sw-slide-product-img__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
    });

    $(".js-fav").on("click", function() {
        $(this).find('.sw-slide-heart').toggleClass("is-active");
    });