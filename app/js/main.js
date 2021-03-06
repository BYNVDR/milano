$(document).ready(function () {
    var mainSlider = $('.main-slider__wrapper');
    mainSlider.owlCarousel({
        items:1,
    });

    $('.main-slider__button--next').click(function() {
        mainSlider.trigger('next.owl.carousel');
        console.log('next')
    })
    // Go to the previous item
    $('.main-slider__button--prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        mainSlider.trigger('prev.owl.carousel');
    })
    var reviewsSlider = $('.reviews__slider-wrapper');
    reviewsSlider.owlCarousel({
        items:1,
    });
    $('.main-slider__button--next').click(function() {
        reviewsSlider.trigger('next.owl.carousel');
        console.log('next')
    })
    // Go to the previous item
    $('.main-slider__button--prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        reviewsSlider.trigger('prev.owl.carousel');
    });

    $('.dropdown-list__tab-head').on('click', function() {
        console.log('gfdgf');
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).next('.dropdown-list__sublist').show();
        } else {
            $(this).removeClass('active');
            $(this).next('.dropdown-list__sublist').hide();
        }
    })

    $('#mobileMenuButton').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header__nav').addClass('active');
            $('body').addClass('fixed');
        } else {
            $(this).removeClass('active');
            $('.header__nav').removeClass('active');
            $('body').removeClass('fixed');
        }
    });

    ($(function () {

        $('[data-popup]').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var popupName = $this.attr('data-popup');
            var currentPopup = $('[data-popup-content='+popupName+']');
            currentPopup.addClass('active');
            
        });

        $('[data-popup-close]').on('click', function () {
            var popupName = $(this).attr('data-popup-close');
            $('[data-popup-content='+popupName+']').removeClass('active');
        });

        $('.popup').mouseup(function (e){
            var div = $(".popup__container");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $(this).removeClass('active');
            }
        });

    }));

});