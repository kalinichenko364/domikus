let slide = $('.js-slide');
let openPopup = $('.js-open-popup');

//открытие попапа
$(openPopup).on('click', function(e) {
  let currentBtn = $(this).attr('data-index');
  let currentSlide;
  let btnTab = $(this).data('tab');
  let activeSliderPopup = [];
  let parentBtn = $(this).parents('.js-tabs-content');

  $(parentBtn).each( function() {
    let $this  = $(this);
    let currentPopup = $this.find(slide);

    $(currentPopup).each( function() {
      if ( btnTab === $(this).data('tab') ) {
        $this.find( $(this).clone().appendTo('.js-slider-popup')); //slider-popup__slides
        activeSliderPopup.push($(this));
      }
    });

  });

  $('.slider-popup .slide-title').prepend('modal');

  $('.slider-popup').addClass('active');
  $('.slider-popup-close').addClass('active');

  for (var i = 0; i < activeSliderPopup.length; i++) {
    if ($(activeSliderPopup[i]).parents('.slick-slide').attr('data-slick-index') === currentBtn) {
      currentSlide = currentBtn;
    }
  }

  var slidesLength = activeSliderPopup.length;
  var activeSlide = +currentSlide + 1;
  // счетчик слайдов
  var status = $('.counter');
  var slickElement = $('.js-slider-popup');
  
  status.text('' + activeSlide + '/' + slidesLength + '');
  slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    status.text(i + '/' + slick.slideCount);
  }); 

  $('.slider-popup__slides').slick({
    initialSlide: currentSlide,
    fade: true,
    prevArrow: "<button type='button' class='slider__prev'></button>",
    nextArrow: "<button type='button' class='slider__next'></button>"
  });

});

// закрытие попапа
var slickInit = '.slick-initialized';

let closePopup = function() {
  $('.slider-popup').removeClass('active');
  $('.slider-popup__close').removeClass('active');
  if( $('.slider-popup__slides' + slickInit).length >= 1) {
    $('.slider-popup__slides').slick('unslick');
  }
  $('.slider-popup__slides').html('');
  $('.slider-popup__counter').text('');
};

  //  при клике на крестик
$('.slider-popup__close').on('click', function() {
  closePopup();
});
// при нажатии на escape
$(window).keydown( function(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
});
// при клике вне попапа
$('body').mouseup(function(e) {
  var div = $('.slider-popup__slides');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass('active');
    closePopup();
  }

});
