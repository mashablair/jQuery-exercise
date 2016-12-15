// $(document).ready(function() {
//     $('.vacation').on('keyup', '.quantity', function() {
//         //get price for this vacation
//         var price = +$(this).closest('.vacation').data('price');
//         // --> 399.99 returns it as a number, not as a string
//         // get quantitiy entered
//         var quantity = +$(this).val();
//         // set the total price * quantity
//         $('#total').text(price * quantity);
//     });
// });



// VERSION 2
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    $('#nights-count').text(nights);
    var pricePerNight = +$(this).closest('.tour').data('daily-price');
    $('#total').text(nights * pricePerNight);
  });
});





