$(document).ready(function(){
    $('button').on('click', function() {
        var price = $('<p>From $400.00</p>');
        $('.vacation').append(price);
        $('button').remove();
    });
});

// but this code will remove ALL buttons and replace all of the with the same price!


$(document).ready(function(){
    $('button').on('click', function() {
        var price = $('<p>From $400.00</p>');
        $(this).closest('.vacation').append(price);
        $(this).remove();
    });
});



$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message).find('button').remove();
  });
});


$(document).ready(function() {
    $('button').on('click', function() {
        var vacation = $(this).closest('.vacation');
        var amount = vacation.data('price');
        var price = $('<p>From $' +amount+ '</p>');
        vacation.append(price);
        $(this).remove();
    });
});

