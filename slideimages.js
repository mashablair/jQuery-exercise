$(document).ready(function() {
    $('.see-photos').on('click', function(event) {
        $(this).closest('.tour').find('.photos').slideToggle();
        event.stopPropagation();
        event.preventDefault();
    });

    // This event handler will not be called:
    $('.tour').on('click', function() {
        console.log('Nope, this event will not happen!');
    });
});