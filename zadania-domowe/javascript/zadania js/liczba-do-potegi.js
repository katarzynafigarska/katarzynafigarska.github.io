function liczbaDoPotegi(potega, wykladnik) {
  var wynik = potega;
  
for (var i = 1; i < wykladnik; i++) {
  wynik *= potega;
}
return wynik;

}

console.log(liczbaDoPotegi(3,3));







//Zaimplementuj funkcję, która przyjmuje 2 parametry. Pierwszy parametr, to podstawa, która będzie podnoszona do potęgi, a drugi to wykładnik.
//
//Funkcja podnosi podstawę do potęgi i zwraca wartość swoich obliczeń.
//
//Przy implementacji zadania nie używaj klasy Math.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it