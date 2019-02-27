function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person('John', 'Doe');

//SEGUNDA PARTE

//pass bu value
function change(b) {
    b = 2
}

var a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(d) {
    d.prop1 = function() {}
        d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);


