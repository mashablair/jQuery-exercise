// $(document).ready(function() {
//     alert($('img').length);
//     $('#tour').on('click', 'button', function() {
//         $('.photos').slideToggle();
//     });
//       // add a new event handler
//     $('.photos').on('mouseenter', 'li', function() {
//         $(this).find('span').slideToggle();
//     });
//     // add another event handler
//     $('.photos').on('mouseleave', 'li', function() {
//         $(this).find('span').slideToggle();
//     });
// });


$(document).ready(function() {
    alert($('img').length);
    $('#tour').on('click', 'button', function() {
        $('.photos').slideToggle();
    });

    // create showPhotos() function
    function showPhotos() {
    $(this).find('span').slideToggle();
    }

    $('.photos').on('mouseenter', 'li', showPhotos);
    $('.photos').on('mouseleave', 'li', showPhotos);
});