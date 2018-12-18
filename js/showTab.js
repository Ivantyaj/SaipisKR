define(function () {
    return function () {
        $(document).on('click', '#but2', function () {
            $('#porod td:empty').html('-');
            $("table").filter(":hidden").css('display', 'block');
        });
    }
});
