$(document).ready(function() {
    $('.see-photos').on('click', function(event) {
        $(this).closest('.tour').find('.photos').slideToggle();
        // event.stopPropagation();
        event.preventDefault();
    });

    // This event handler will not be called:
    // $('.tour').on('click', function() {
    //     console.log('Nope, this event will not happen!');
    // });

    // Adding CSS
    $('#vacations').on('mouseenter', '.tour', function() {
        // $(this).css({'background-color': 'grey',
        //               'border-color': '1px solid #967'});
        // $(this).find('.price').show();
        // $(this).addClass('highlighted');
        $(this).addClass('highlighted');
        $(this).closest('.tour').find('.photos').slideToggle();
        // add animation:
        console.log(this);
        // if ($(this).hasClass('highlighted')) {
        //     $(this).animate({'top': '-10px'}, 'fast');
        // } else {
        //     $(this).animate({'top': '0px'}, 'fast');
        // }

    });

    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlighted');
        // $(this).closest('.tour').find('.photos').show();
    });
});

// $(this).find('.price').css('display', 'block');
// $(this).find('.price').show();