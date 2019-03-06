//Regresa el objeto, pero solamente lo que el usuario desea y se encuentra encapsulado

var greeting = 'Helloooo worrlllasdfghjklñ';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}