var a, rest;
[a] = [10];

console.log(a);
//console.log(b);

[a, ...rest] = [10, 20, 30, 40, 50,60,70,80,90,100];

console.log(rest);

var a=1,b;
b=parseInt(prompt("Enter one"));
if(a===b)
    console.log("Strict equals");
else    
    console.log("not equal");

    var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
        delete trees[3];
        console.log(trees); 
        console.log(0 in trees);
        console.log(10 in trees);
        

// in operator
var arr={make:"car",model:"suzuki"};
console.log('make' in arr);
delete arr.make;
if('make' in arr===false)
{
    arr.make='bike';
}
console.log('make' in arr);

function Car(a,b,c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }
  
  var car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);


//Spread syntax--
  function sum(x, y, z,w) {
    return x + y + z +w;
  }
  
  const adders = [1,4,6];
  
  console.log(sum(...adders));



  function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    return temp;
  }
  console.log(JSClock());


  var s1= new String("Foo is just a Sample Word and it is just an Example");
  var s2= new String(" and it is just an example");
  var s=s1+s2;
  console.log("Concat example : "+ s);
  console.log("Index at 2 is "+ s.charAt(2));
  console.log("Index os 'is' is "+ s.indexOf("is"));
  console.log("Last Index of 'is' is "+ s.lastIndexOf("is"));
  console.log("character code of 'is' is "+ s.charCodeAt("is"));
  console.log("startswith demo "+ s.startsWith("fo"));
  console.log("includes demo "+ s.includes("ju"));
  console.log("endswith demo "+ s.endsWith("ple"));
  var breaks= s.split(" ");
  console.log(breaks[7]);
  console.log(s.slice(-7));
  var chk=/[A-Z]/g;
  console.log(s.match(chk));
  var rep=/and/gi;
  console.log(s.replace(rep,'also'));
  console.log(s.search(rep));
  var lowerStr=new String(s.toLowerCase());
  console.log(lowerStr);
  var upperStr=new String(s.toUpperCase());
  console.log(upperStr);
  var strRepeat=new String("        hi hey           ");
  console.log(strRepeat.repeat(10));
  console.log(strRepeat.trim());

  console.log('string text line 1 \n string text line 2');



  