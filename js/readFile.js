function loadInform() {
    $.ajax({
        url: "resource/cat.txt",
        dataType: "text",
        success: function (data) {
            $('#aboutCat').html(data);
        }
    });
}