define(function () {
    return function () {
        $(document).on('click', '#but3', function () {
            $('#porod tr').clone().insertAfter('#porod tr');
        });
    }
});