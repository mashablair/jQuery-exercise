$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.per-night').show();
        $(this).find('.per-night').animate({'opacity': '0.5', 'top': '-14px'}, 'fast');
    });
    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlight');
        $(this).find('.per-night').hide();
    });
});