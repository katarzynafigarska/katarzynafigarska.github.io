//const orangeBtn = document.querySelector('.orange');
//const greenBtn = document.querySelector('.green');
//const blueBtn = document.querySelector('.blue');
//const yellowBtn = document.querySelector('.yellow');
//const redBtn = document.querySelector('.red');

//optymalizujemy I sposób
//function changeColor() {
//console.log(this);
//console.log(this.classNane);
//const selectedColor = this.classNane;
//document.body.className = this.className;
//}

//orangeBtn.addEventListener("click", changeColor);
//greenBtn.addEventListener("click", changeColor);
//blueBtn.addEventListener("click", changeColor);
//yellowBtn.addEventListener("click", changeColor);
//redBtn.addEventListener("click", changeColor);




//optymalizujemy II sposób

const items = document.querySelectorAll("div");
items.forEach(function (item) { //pojedynczy element przekazujemy, wykonujemy funkcje dla kazdego elementu osobno za pomoca forEach
    item.addEventListener('click', changeColor)
})

function changeColor() {
    document.body.className = this.className;
}

//pojedynczo wszystko pisane

//orangeBtn.addEventListener("click", function () {
//document.body.className = "orange";
//  //document.body.classList.toggle("orange");
//})

//greenBtn.addEventListener("click", function () {
//document.body.className = "green";
//  //document.body.classList.toggle("green");
//})