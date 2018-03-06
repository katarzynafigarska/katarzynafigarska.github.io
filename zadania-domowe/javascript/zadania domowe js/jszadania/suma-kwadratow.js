
  var tablica = [0, 1, 2, 3, 4, 5];

function sumaKwadratow (tablica) {
  var kwadrat = 0;
  
  for(var i = 0 ; i < tablica.length ; i++) {
    console.log( Math.pow(i,2));
    kwadrat += Math.pow(i,2);
  }
  
  console.log('suma kwadratów = ' + kwadrat);
}

sumaKwadratow(tablica);

/*

Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.

*/