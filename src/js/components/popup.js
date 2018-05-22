$(document).ready(function() {

// open popup
  $('a.btn-popup').on('click', function(e) {
    e.preventDefault();

    $('.overlay').fadeIn(400, function() {
      $('.popup')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
    });

  });

  // close popup
  $('.btn-close, .overlay').on('click', function() {
    $('.popup')
      .animate({opacity: 0, top: '45%'}, 200, function() {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      });
  });

});
