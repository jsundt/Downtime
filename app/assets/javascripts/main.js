$(document).on('ready ajaxComplete', function() {

  $('.logo').addClass('drawing');
  $('.watermark').addClass('drawing');
  $('.content').addClass('drawing');
  $('.typed-cursor').addClass('drawing');


  $(".js-clock").clock({
    "calendar":"false",
    "format":"24"
  });

});