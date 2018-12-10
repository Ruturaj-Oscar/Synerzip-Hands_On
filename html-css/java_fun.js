function myFun(cars){
    cars.make="Toyota";
}
var myCar={model : 'Mustang',make :'Ford',year :'1980'};
var car1,car2;
car1=myCar.make;
console.log(car1);
myFun(myCar)
car2=myCar.make;
console.log(car2);

//Anonymous function example.
var cube =function (number){    return number*number*number;}

let num=cube(3);
document.write("Cube of 3 is" +"  :  "+num+"<br>");

var number=parseInt(prompt("Enter a number"));
    var fact=function factorials(n)
    {
        if((n==0)||(n==1))
            return 1;
        else   
            return  n*factorials(n-1);
    }
document.write("Factorial is : "+ fact(number) +"<br>");

function map(f, a) 
{
    var i,result = []; // Create a new Array
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
    
  }
  var f = function(x)
    {
        return x * x * x; 
    }
    var numbers = [1,2,3,4,5,5,7];
    var calculate = map(f,numbers);
    document.write("Calculated result is :"+ calculate);

function squarenumbers(a,b)
{
    function squarenum(x)
    {
        return x*x;
    }
    return squarenum(a)+squarenum(b);
}
console.log(squarenumbers(4,5));


var pet = function(name) {   
  var getName = function() {
    return name;             
                             
  }
  return getName;            
}
myPet = pet('Oscar');
   
document.write("<h1><br> My pet "+myPet());

//Rest parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(5 , 1, 2, 3);
  console.log(arr);

  var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  //using anonymous function.
  var a2 = a.map(function(s) { return s.length; });
  console.log(a2);  
  
  //using fat-arrow technique.
  var a3 = a.map(s => s.length);
  console.log(a3);

  function fun1(x)
  {
       console.log(x);
       console.log("frist")

  }
  function fun1(x,y)
  {
       console.log(x,y);
       console.log("second")
  }
  fun1(2);
  fun1(2,4);
