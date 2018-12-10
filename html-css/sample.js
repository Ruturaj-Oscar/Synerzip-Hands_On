function greet(name){
    console.log("Hello" + " "+name)
}
var cube =function (number){    return number*number*number;}
var arr_num=[10,20,30,40]
for(let i in arr_num)
    console.log(i)
for(let i of arr_num)
    console.log(i)

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }

  UserException.prototype.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
var age=prompt("please enter your age");
try {
    if(age<18)
        throw new UserException("invalid age");
   
} catch (error) {
    document.write(error.toString());
    
}
if(age<0)
    document.write("<h3>Entered number is negative<br><br>")
else if(age==0)
    document.write("<h3>Entered number is zero<br><br>")
else
    document.write("<h3>Entered number is positive<br><br>")

//switch statements
var no=parseInt(age);
switch(no){
    case 0: document.write("Zero entered<br>")
            break;
    case 1: document.write("one entered<br>")
            break;
    case 2: document.write("two entered<br>")
             break;
    default:document.write("Choices statements<br>")
            break;
}
var f=2;
if(no==1)
    document.write("Entered number is one...not prime<br>")
while(no>=f)
{
    if(no%f==0)
       {
        document.write(f+"<br>");
        no/=f;
       } 
    else
        f++;
}


    

greet('Ruturaj');
let num=cube(3);
document.write("Cube of 3 is" +"  :  "+num+"<br>");

document.write("Cube of 4 is" +"  :  "+cube(4))
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  promise.then(alert);


  var a1=1;
  var a2=10;
  lable_Example:
    while(a1<5){
        console.log(a1 +" a1");
        a1++;
        while(a2>5){
        console.log(a2 +"  a2");
        a2--;
        if(a2%2==0)
            continue lable_Example;
        }
  }
  console.log(a1 +"  a1 ")
  console.log(a2 +"  a2 ")

