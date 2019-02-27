//Objects
var person = {
    firstname: 'Chino',
    lastname: 'Cochino',
    greet: function() {
        console.log("hello, " + this.firstname + " " + this.lastname);
    }
}

person.greet();
console.log(person['firstname']);

//PROTOTIPADO DE HERENCIA Y FUNCIÓN DE CONSTRUCTOR

//Función constructor
function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.greet = function() {
    console.log("hello! " + this.firstname + " " + this.lastname)
};

var john = new person('John', 'Doe');
john.greet();

var jane = new person('Jane', 'Doe');
jane.greet();


