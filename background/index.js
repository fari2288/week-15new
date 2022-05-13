/*let pink=document.querySelector('.pink')
pink.onclick=changePink
function changePink() {
    document.body.style.background='pink'
}
let yellow=document.querySelector('.yellow')
yellow.onclick=changeYellow
function changeYellow() {
    document.body.style.background='yellow'
}
let white=document.querySelector('.white')
white.onclick=changeWhite
function changeWhite() {
    document.body.style.background='white'
}
let blue=document.querySelector('.blue')
blue.onclick=changeBlue
function changeBlue() {
    document.body.style.background='blue'
}
let green=document.querySelector('.green')
green.onclick=changeGreen
function changeGreen() {
    document.body.style.background='green'
}
*/






/*
let button=document.querySelector('.dropdown-menu')
button.onclick=changeColor
function changeColor() {
switch (document.querySelector('.dropdown').value){
    case 'white': document.body.style.background='white';break;
    case "yellow": document.body.style.background='yellow'; break;
    case 'green': document.body.style.background='green'; break;
    case 'blue': document.body.style.background='blue'; break;
    case 'pink':document.body.style.background="pink"; break;
}}*/



let button=document.querySelector('.dropdown-menu')
button.onclick=changeColor
function changeColor() {
    const color = document.querySelector('.dropdown').value
    document.body.style.background= color
    if (color=="white") {
        document.body.style.background='white';
    }
    if (color=="yellow") {
        document.body.style.background='yellowu';
    }
    if (color=="pink") {
        document.body.style.background='pink';
    }
    if (color=="blue") {
        document.body.style.background='blue';
    }
    if (color=="green") {
        document.body.style.background='green';
    }}
