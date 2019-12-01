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
    $('.customPrevBtn').click(function() {
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
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        reviewsSlider.trigger('prev.owl.carousel');
    });
});