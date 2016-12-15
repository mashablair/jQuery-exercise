$(document).ready(function() {
    $('.vacation').on('click', '.expand', function(event) {
        // prevent the bubble going all the way up:
        // event.stopPropagation();
        event.preventDefault();
        // find the comments ul
        $(this).closest('.vacation').find('.comments').fadeToggle();
        //show it -- fade it in
    });
});