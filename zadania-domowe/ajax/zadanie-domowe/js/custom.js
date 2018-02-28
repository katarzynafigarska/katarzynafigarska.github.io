'use strict';


$('#przycisk').click(function () {

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {



        $('body').append('<div id="dane-programisty"></div>');

        $('#dane-programisty').append('<p>Imię: ' + data.imie + '</p>');
        $('#dane-programisty').append('<p>Nazwisko: ' + data.nazwisko + '</p>');
        $('#dane-programisty').append('<p>Zawód: ' + data.zawod + '</p>');
        $('#dane-programisty').append('<p>Firma: ' + data.firma + '</p>');


    });

});
