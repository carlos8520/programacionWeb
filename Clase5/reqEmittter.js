var Emitter = require('./emitter');

var emtr = new Emitter();
emtr.on('greet', function() {
    console.log('hello, hi there!');
})

emtr.on('greet', function() {
    console.log('a greeting occured!');
})

console.log('hello there!');
emtr.emit('greet');