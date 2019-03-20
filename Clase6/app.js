 var person = {
    firstname:'',
    lastname:'',
    greet:function(){
        return this.firstname + ' ' + this.lastname;
    }
}

//John es un objeto cuyas propiedas son sobreescritas, con lo cual pertenecen a john y no a persona

var john = Object.create(person);
john.firstname = 'cesario';
john.lastname = 'bombón asesino';

//-----------------------------------

var jane = Object.create(person);
jane.firstname = 'mirka';
jane.lastname = 'y cesario 4ever <3';


//console.log(john.greet());
console.log(jane.greet());

//------------------------------------

var EventEmmitter = require('events');
var util = require('util');

function Greetr(data){
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet',function(data){
    console.log('someone greeted ' + data);
})

greeter1.greet('oscarito'); 

//------------------------------------------

/*var obj = {
    name: 'cesar megalodón',
    greet: function(param) {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'jhon doe'});
obj.greet.apply({name: 'jane doe'});*/