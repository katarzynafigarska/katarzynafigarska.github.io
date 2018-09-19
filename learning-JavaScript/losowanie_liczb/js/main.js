const result = [];

const losowanie = function () {
    if (result.length === 6) return;

    const div = document.createElement('div');
    const wynikLosowania = Math.floor(Math.random() * 49 + 1);

    for (let i = 0; i < result.length; i++) {
        if (wynikLosowania === result[i]) {
            console.log('ta sama liczba');
            return losowanie();
        }
    }

    //Math.floor - zaokrąglenie
    div.textContent = wynikLosowania;
    document.body.appendChild(div);
    result.push(wynikLosowania); //dodajemy do tablicy wyników
}



const button = document.querySelector('button');

button.addEventListener('click', losowanie);