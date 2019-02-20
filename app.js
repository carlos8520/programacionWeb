//function statement
function greet() {
    console.log('hola chino');
}
greet();

//function statement refactor
let greet=() =>{
    console.log('hola chino');
}
greet();

//first-class functions
function lotGreeting(fn) {
    fn();
}
lotGreeting(greet);

//first-class functions refactor
let lotGreeting=(fn) =>{
    fn();
}
lotGreeting(greet);

//function expression
var greetMe = function() {
    console.log('saca la beca de nissan chino');
}
greetMe();

//function expression refactor
let greetMe = () => {
    console.log('saca la beca de nissan chino');
}
greetMe();

//use a function expression on the fly
lotGreeting(function() {
    console.log('hi, hello there!');
});

//use a function expression on the fly refactor
lotGreeting(() =>{
    console.log('hi, hello there!');
});