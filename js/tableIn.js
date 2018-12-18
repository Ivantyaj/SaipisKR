define(function () {
    return function () {
        $(document).on('click', '#but', function () {
            var newTr = document.createElement('tr');
            var tab = document.getElementById('porod');
            tab.appendChild(newTr);
            var newtd1 = document.createElement('td');

            var newtd2 = document.createElement('td');

            var newtd3 = document.createElement('td');

            var newtd4 = document.createElement('td');

            newTr.appendChild(newtd1);
            newTr.appendChild(newtd2);
            newTr.appendChild(newtd3);
            newTr.appendChild(newtd4);
            if ($('#nameType').val() == "") {
                alert('Поле "Название вида" не заполнено!')
            } else {
                newtd4.innerHTML = $('#age').val();
                newtd3.innerHTML = $('#name').val();
                newtd2.innerHTML = $('#namePorod').val();
                newtd1.innerHTML = $('#nameType').val();
                $('#age').val();
            }

        });
    }
});