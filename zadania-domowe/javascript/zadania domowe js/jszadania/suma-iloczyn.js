var tablica = [1, 2, 3, 4, 5, 6];


function dodawaniaMnozenia (tablica) {
  var iloczyn = 1;
  var suma = 0;
  
  for(var i = 0 ; i < tablica.length ; i++) {
    iloczyn *= tablica[i];
    suma += tablica[i];
  }
  
  console.log('suma = ' + suma);
  console.log('iloczyn = ' + iloczyn );
}

dodawaniaMnozenia(tablica);

/*
Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- użyj pętli for lub forEach w zadaniu

w funkcji musi byc slowo tablica lub array, a jak jest string - napis, slowo string w nawiasach przy funkcji

*/