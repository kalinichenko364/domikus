var createTabs = function() {
  var tabs = $('.js-tabs');
  var i = 0;
  // console.log(this);
  var showPage = function(tabs, i) {
    $(tabs).children('.js-tabs-container').children('.js-tabs-content').css({'overflow' : 'hidden' , 'height' : '0', 'border' : '0'});
    $(tabs).children('.js-tabs-container').children('.js-tabs-content').eq(i).css({'height' : 'auto'});
    $(tabs).children('ul').children('.js-tabs-label ').removeClass('is-active');
    $(tabs).children('ul').children('.js-tabs-label ').eq(i).addClass('is-active');
  };      
  showPage(tabs, 0);        
  $(tabs).children('ul').children('.js-tabs-label').each(function(index, element) {
    $(element).attr('data-page', i);
    i++;
  });    
  $(tabs).children('ul').children('.js-tabs-label').click( function() {
    showPage($(this).parent().parent(), parseInt($(this).attr('data-page')));
  });             
};      
createTabs();
