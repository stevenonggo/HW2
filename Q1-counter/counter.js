let counter = 0;

function substract() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

function add() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

function reset() {
    counter = 0;
    document.querySelector('h1').innerHTML = counter;
}

