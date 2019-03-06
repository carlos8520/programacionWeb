//Object properties and methods
//Estamos accediendo a la propiedad del objeto mediante su índice

var obj = {
    greet: 'Hola mundo guay!'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//Functions and arrays
var arr = [];

arr.push(function() {
    console.log('Hola mundo guay');
});

arr.push(function() {
    console.log('Hola chino');
});

arr.push(function() {
    console.log('Howdy! :D');
});

arr.forEach(function(item){
    item();
});

//----------------------------------

/*var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('hello, hi there!');
});

emtr.on('greet', function() {
    console.log('a greeting occured!');
});

console.log('hello there!');
emtr.emit('greet');*/

//----------------------------------

var Emitter = require ('events');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('hello, hi there!');
});

emtr.on('greet', function() {
    console.log('a greeting occured!');
});

console.log('hello there!');
emtr.emit('greet');


