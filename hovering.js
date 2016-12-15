// $(document).ready(function() {
//     console.log($('button').length);
//     $('.confirmation').on('click', 'button', function() {
//         $(this).closest('.confirmation').find('.ticket').slideToggle();
//     });
//     $('.confirmation').on('mouseenter', 'h3', function() {
//         $(this).closest('.confirmation').find('.ticket').slideDown();
//     });
// });


function showTicket () {
    $(this).closest('.confirmation').find('.ticket').slideDown();
}

$(document).ready(function() {
    $('.confirmation').on('click', 'button', showTicket);
    $('.confirmation').on('mouseenter', 'h3', showTicket);
})