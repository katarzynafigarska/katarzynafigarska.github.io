var przeczytana = "przeczytana";

function Ksiazka(tytul, autor, przeczytana){
 this.tytul = tytul;
 this.autor = autor;
 this.przeczytana = przeczytana;
 this.opiszKsiazke = function(){
   if (this.przeczytana === true) {
     return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana";
   } else if (this.przeczytana === false) {
     return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor;
   }
 }
}

var wiedzmin = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
var panTadeusz = new Ksiazka("Pan Tadeusz", "Adam Mickiewicz", true );
var ogniemIMieczem = new Ksiazka("Ogniem i mieczem", "Henryk Sienkiewicz", false);
var chlopi = new Ksiazka("Chłopi", "Władysław Reymont", false );


var ksiazki= [];
ksiazki[0] = wiedzmin;
ksiazki[1] = panTadeusz;
ksiazki[2] = ogniemIMieczem;
ksiazki[3] = chlopi;

function iloscPrzeczytanych(ksiazki) {
  var wynik = 0; 
  for (var i = 0; i<ksiazki.length; i++) {
    console.log(ksiazki[i].opiszKsiazke());
    if(ksiazki[i].przeczytana) {
      wynik+=1;
  }
}
return wynik;
}

var przeczytane = iloscPrzeczytanych (ksiazki);
console.log("Przeczytane: " + przeczytane);



/*

Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

Na samym końcu wyświetl w konsoli ilość przeczytanych książek