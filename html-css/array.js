var arr = new Array('hi', 'hello', 'hola', 1, 2, 3, 4, 5);
console.log(arr);
console.log(arr.length)
console.log(arr[length]);

var numArr = [];
for (let i = 0; i < 10; i++) {
    numArr[i] = i + 1;
}
document.write("<br><h2>" + numArr);
console.log(numArr[3] = 30);
document.write("<br><h2>" + numArr);

var arrEx = [1, 2, , 3, 4, 5];
console.log(arrEx.length);
console.log(arrEx);
// arrEx.length=2;
// console.log(arrEx);
// arrEx.length=5;
// console.log(arrEx);
document.write("<br>");
// var i = 0;
for (let i = 0; i < arrEx.length; i++) {
    if (arrEx[i] === undefined)
       arrEx[i] = 'undefined';
       //arrEx[i] = 10;
}
document.write("<br>Updated array is : " + arrEx);

document.write("<br>" + arrEx);

console.log(arr.concat(arrEx));
console.log(arr.join('-'));
console.log(arr.push('pushed'));
console.log(arr);
console.log(arr.pop());
console.log(arr);
var first_shift = arr.shift();
console.log("First element of array is" + arr.shift() + " array after shift is " + arr);
console.log("unshift elements to array are " + arr.unshift('hi', 'hello') + " array after unshift is " + arr);
console.log("slice example : " + arr.slice(3, 8));
console.log("splice example : " + arr.splice(0, 3, 'splice', 'example'));
console.log(arr);

console.log(arrEx.reverse());
arr.sort();
document.write("<br> Sorted array is " + arr.join('-'));
document.write("<br>" + arr.join('-'));
document.write("<br> Search element 2 :" + arr.indexOf('example'));


//****Map Example***
const varMap = numArr.map(x => x * 2);
document.write("<br>" + varMap);
//Filter Example......
document.write("<br><br> " + arrEx.filter(function (item) { return typeof item == 'number'; +"<br>"}));

//Every() and Some() Example....
// every() : all values should satisfy the condition, return true.
//Some() : if all values do not satisfy the condition then returns false.
function check(num)
{
    return typeof num == 'number';
}
console.log(arrEx.every(check));

//Multidimentional array
var multi_Array=new Array(4);
for(let m=0;m<4;m++)
{
    multi_Array[m]=new Array(4);
    for(let n=0;n<4;n++)
    {
        multi_Array[m][n]=m +" "+ n;
    }
}
document.write("<br><br>");
for(let m=0;m<4;m++)
{
    for(let n=0;n<4;n++)
    {
        document.write(multi_Array[m][n]+" , ");
    }
    document.write("<br>");
}


