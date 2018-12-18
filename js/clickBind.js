var click = 0;

$(document).ready(function () {
    $('#cat').dblclick(function () {
        click++;
        if (click % 2 != 0) {
            $('#cat').css('transform', 'scale(1.5)');

        } else {
            $('#cat').css('transform', 'scale(1)');

        }
        $('#zag').animate({opacity: 0}, 3000);
        $('#zag').animate({opacity: 1}, 3000);
    });


    $('#cat').mousedown(function () {
        $('#jsonLoad').css('color', 'red');
    });

    $('#cat').mouseup(function () {
        $('#jsonLoad').css('color', 'black');
    });
});

