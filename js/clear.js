define(function () {
    return function () {
        $(document).on('click', '#but4', function () {
            $('#myForm')[0].reset();
        });
    }
});