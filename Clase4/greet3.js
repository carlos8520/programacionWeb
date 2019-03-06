//Module patterns
//Regresa el objeto completo

function Greetr() {
    this.greeting = 'Hi hello there';
    this.greet = function() {
        console.log(this.greeting);
    }
}
module.exports = new Greetr();