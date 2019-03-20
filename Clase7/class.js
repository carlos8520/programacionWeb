// STRICT HACE QUE EL ENGINE DE JS SEA MÁS ESTRICTO CON LA SINTÁXIS DEL CÓDIGO CREADO
'use strict';

// AL UTILIZAR EL STRICT SOMOS CAPACES DE CREAR CLASES EN JS
class Person {
    //ESTA CLASE LLEVA UN CONSTRUCTOR COMO BOB EL CONSTRUCTOR
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // ESTA CLASE GENERA EL MÉTODO SALUDAR
    greet() {
        console.log('Hello' + ' ' + this.firstname + ' ' + this.lastname);
    }
}

var jhon = new Person('jhon', 'doe');
jhon.greet();
var jane = new Person('jane', 'doe');
jane.greet();

console.log(jhon.__proto__);
console.log(jane.__proto__);
console.log(jhon.__proto__ === jane.__proto__);