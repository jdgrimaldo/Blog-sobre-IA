$(document).ready(function() {
    $('.menu-lateral a').click(function(event) {
      event.preventDefault();
  
      var targetSectionID = $(this).attr('href');
      $(this).addClass('active');
  
      $('html, body').animate({
        scrollTop: $(targetSectionID).offset().top
      }, 10000, 'easeInOut', function() {
        $(this).removeClass('active');
      });
    });
  });