function pobierz (x) {
    document.getElementById("wynik").value += x;
}

function oblicz (){
    var wynik = document.getElementById("wynik").value;
    document.getElementById("wynik").value = eval(wynik);
}

function czysc (){
    document.getElementById("wynik").value = "";
}