document.querySelector('.calculator__button-plus').onclick = getSum

function getSum() {
    const value1 = document.querySelector('.value1').value
    const value2 = document.querySelector('.value2').value
    document.querySelector('.result').innerHTML = Number(value1) + Number(value2)
}

document.querySelector('.calculator__button-minus').onclick = getMinus

function getMinus() {
    const value1 = document.querySelector('.value1').value
    const value2 = document.querySelector('.value2').value
    document.querySelector('.result').innerHTML = Number(value1) - Number(value2)
}
document.querySelector('.calculator__button-times').onclick = getTimes

function getTimes() {
    const value1 = document.querySelector('.value1').value
    const value2 = document.querySelector('.value2').value
    document.querySelector('.result').innerHTML = Number(value1) * Number(value2)
}

document.querySelector('.calculator__button-divide').onclick = getDivide

function getDivide() {
    const value1 = document.querySelector('.value1').value
    const value2 = document.querySelector('.value2').value

if (value2==0) {
    document.querySelector('.result').innerHTML='На ноль делить нельзя'
}
else
    document.querySelector('.result').innerHTML = Number(value1) / Number(value2)
}