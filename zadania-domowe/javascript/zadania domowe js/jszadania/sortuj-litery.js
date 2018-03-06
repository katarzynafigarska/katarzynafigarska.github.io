
function literyPosortowane( string ) {
  var tablica = string.split("");
  var posortowana = tablica.sort();
  var zlaczony = posortowana.join("");
  return zlaczony;
}

console.log(literyPosortowane( "Akademia 108" ));


/*
Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.

Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach