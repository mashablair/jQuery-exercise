// $(document).ready(function() {
//     // some code
//     $('#filters').on('click', '.onsale-filter', function() {
//         // find all vacations that are on-sale
//         // add a class to these vacations to highlight them
//         // but first we unhighlight all of them:
//         $('.highlighted').removeClass('highlighted');
//         $('.vacation').filter('.onsale').addClass('highlighted');
//     });

//     // the same for the expiring filter:
//     $('#filters').on('click', '.expiring-filter', function() {
//         $('.highlighted').removeClass('highlighted');
//         $('.vacation').filter('.expiring').addClass('highlighted');
//     });
// });




$(document).ready(function() {
  $('.tour').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });

  $('#filters').on('click', '.on-sale', function() {
      $('.tour').removeClass('highlight');
      $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  })
});
