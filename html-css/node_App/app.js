function sayHello(name){
    console.log("hello " + name);
}
sayHello("Ruturaj");

var info=require('./app2.js');
console.log(info.greetFunction('Good-Morning'));
console.log(info.addition(25,15));