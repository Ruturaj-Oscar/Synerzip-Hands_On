var greet = function(msg){
    var msg1=msg+" Ruturaj";
    return msg1;
}
var addition=function add(num1,num2){
    let result=num1+num2;
    return("Addition is :" +result);
}

module.exports.greetFunction=greet;
module.exports.addition=addition;