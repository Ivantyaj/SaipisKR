$(document).ready(function () {
    $.getJSON('../resource/fact.json', {}, function (json) {
        $('#kat').html('');
        $('#names').html('');
        $('#dog').html('');
        $('#porods').html('');
        $('#bird').html('');
        $('#parrot').html('');
        $('#rodent').html('');
        $('#fish').html('');
        $('#kat').append(json.facts.cats);
        $('#names').append(json.facts.names[0]);
        for (var i = 1; i < json.facts.names.length; i++) {
            $('#names').append(", " + json.facts.names[i]);
        }
        $('#porods').append(json.facts.porods[0]);
        for (var i = 1; i < json.facts.porods.length; i++) {
            $('#porods').append(", " + json.facts.porods[i]);
        }
        $('#dog').append(json.facts.dogs);
        $('#bird').append(json.facts.birds);
        $('#parrot').append(json.facts.parrot);
        $('#rodent').append(json.facts.rodents);
        $('#fish').append(json.facts.fishes);
    });

    $.ajax({
        url: "../resource/facts.txt",
        dataType: "text",
        success: function (data) {
            $('#aboutHistory').html(data);
        }
    });

});
