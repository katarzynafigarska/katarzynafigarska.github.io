
function fibonacci(n) {
if (n <= 0)  {
  return 0;
}
if (n == 1) {
  return 1;
}
return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(10);


/*
Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.

Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- znajdź w internecie opis merytoryczny ciągu fibbonaciego