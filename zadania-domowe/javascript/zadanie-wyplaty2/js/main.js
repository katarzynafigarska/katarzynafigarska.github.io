    var par1 = document.createElement("p");    
    var par2 = document.createElement("p");
    var par3 = document.createElement("p");
    
    document.getElementById("najlepsi").appendChild(par1);
    document.getElementById("najlepsi").appendChild(par2);
    document.getElementById("najlepsi").appendChild(par3);



document.getElementById('oblicz').addEventListener("click", function () {
    
    const pracownik = document.getElementsByClassName("pracownik");
    const czas = document.getElementsByClassName("czas");
    const stawka = document.getElementsByClassName("stawka");
    const miejsceNaWyplate = document.getElementsByClassName("wyplata");
    const daneDoWyplaty = [pracownik, czas, stawka, miejsceNaWyplate];
    
// OBLICZ WYPŁATĘ, PREMIĘ I PODKREŚL PRACOWNIKOW
    
    for (var i = 0; i < daneDoWyplaty[1].length; i++) {
        if (czas[i].value < 100) {
            pracownik[i].parentNode.style.backgroundColor = "red";
        }
        if (czas[i].value <= 160) {
            wyplata = stawka[i].value * czas[i].value;
            miejsceNaWyplate[i].innerHTML = wyplata;
        }
        if (czas[i].value > 160) {
            premia = (czas[i].value - 160) * stawka[i].value;
            wyplata = premia + stawka[i].value * czas[i].value;
            miejsceNaWyplate[i].innerHTML = wyplata;
        }
    }
    var tablica = [];
    for (var i = 0; i < czas.length; i++) {
        tablica.push(czas[i].value);
    }
    posortowana = tablica.sort(function (a, b) {
        return b - a
    });
    
  //NAJLEPSI PRACOWNICY
    
    console.log(posortowana);
    var najlepsi = [pracownik, czas];
    
    
    for (var i = 0; i < najlepsi[0].length; i++) {
        
        if (czas[i].value === posortowana[0]) {
            pierwszy = pracownik[i].innerText;
            par1.textContent = pierwszy;
        }
        if (czas[i].value === posortowana[1]) {
            drugi = pracownik[i].innerText;
            par2.textContent = drugi;

        }
        if (czas[i].value === posortowana[2]) {
            trzeci = pracownik[i].innerText;
            par3.textContent = trzeci;
        }
    }
})
