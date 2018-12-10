// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// eventEmitter.on('scream', function() {
// console.log('A scream is detected!');
// });
// eventEmitter.emit('scream');

// var fs = require('fs');
// var rs = fs.createReadStream('./app.js');
// rs.on('open', function () {
//   console.log('The file is open');
// });


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// var http=require('http');
// var user=require('./app2.js');
// http.createServer(function(req,rep){
//     // rep.writeHead(200,{'Content-Type' :'txt/html' });
//     rep.write("welcome user : "+ user.greetFunction('Good-Morning'));
//     rep.end('hello user');
// }).listen(8080);

var fs = require('fs');

fs.readFile('app.js', function (err, data) {
    fs.appendFile('sample.txt', data, function (err) {
        if (err)
            throw err;
        console.log('File appended');
    });
});

var fw = require('fs');
fw.readFile('app.js', function (err, data) {
    fw.writeFile("myFile.txt", data, function (error) {
        if (error)
            console.log(error);

        console.log("writeFile operation complete");
    });
});
fw.open('myFile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('opened');
});
 const a=require('fs');
var  files=a.readdirSync('../');
 console.log(files);
