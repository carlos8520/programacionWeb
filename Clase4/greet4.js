//Otro patrón prrón 
//Regresa el constructor

function Greetr() {
    this.greeting = 'Howdy! :D';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;