import './components/tabs.js';
import './components/popup.js';
import './components/accordion.js';
// import './components/slider-popup.js';
import 'slick-carousel';

$(document).ready( () => {
  $('.js-slider').slick({
  	slidesToShow: 3,
  	// centerMode: true,
    prevArrow: '<button class="slider__btn slider__btn--prev" type="button"><img src="img/arrow-left.svg"></button>',
    nextArrow: '<button class="slider__btn slider__btn--next" type="button"><img src="img/arrow.svg"></button>'
  });

});
