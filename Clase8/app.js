'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'hello world';
    }

    greet(data){
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
}

let greeter1 = new Greetr()

util.inherits(Greetr, EventEmmitter);

Console.log(greeting.greet('Cesar'));