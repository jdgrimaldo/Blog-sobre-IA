$(document).ready(function() {
    $('.menu-lateral a').click(function(event) {
        event.preventDefault();
        var targetSectionID = $(this).attr('href');
        var offset = $(targetSectionID).offset().top;

        $('html, body').animate({
            scrollTop: offset
        }, 1000); // Puedes ajustar la duración de la animación según tus preferencias
    });
});