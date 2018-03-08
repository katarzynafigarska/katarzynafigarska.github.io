
function litery (string, litera) {
  
  var tablica = string.split('');
  var ileLiter = 0; 
  
  for(i = 0; i < tablica.length; i++) {
    if(string.charAt(i) == litera.toUpperCase() || string.charAt(i) == litera.toLowerCase() ) 
      ileLiter ++;
    
  }return ileLiter;
}

console.log(litery('Szkoła Programowania Akademia 108', 'a'));




//Zaimplementuj funkcję, która przyjmuje 2 argumenty. Pierwszy parametr to string, a drugi to litera.
//
//Funkcja liczy i zwraca ilość wystąpień litery w stringu.
//
//Funkcję wywołaj z parametrami:
//1. Szkoła Programowania Akademia 108
//2. a
//
//Wynik działania funkcji wyświetl w konsoli.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it