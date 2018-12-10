// Maps

var saying=new Map();
saying.set('dog','bark');
saying.set('cat','meow');
saying.set('bear','grrr');
saying.set('cow','mooo');

for (let [key, value] of saying) {
    document.write(key  +" : "+ value+"<br>");
  };
document.write("<br>");
console.log("bear does "+saying.get('bear'));
console.log("Is cheetah present ?  "+saying.has('cheetah'));
console.log(saying.delete('bear'));
for (let [key, value] of saying) {
    document.write(key  +" : "+ value+"<br>");
  };
  document.write("<br>");
saying.set('Tiger','roar');
  for (let [key, value] of saying) {
    document.write(key  +" : "+ value+"<br>");
  };
  document.write("<br>");
console.log(saying.size);
// console.log(saying.clear());
// console.log(saying.size);

// Sets

var varSet=new Set();
varSet.add(1);
varSet.add('Ruturaj');
varSet.add('54832');
varSet.add(4.32);
for(let i of varSet){
    document.write(i+"<br>");
}
console.log(varSet.delete('54832'));
console.log(varSet.size);
document.write("<br>After removing : <br>");
for(let i of varSet){
    document.write(i+"<br>");
}
console.log(Array.from(varSet));
//converting arrat into set...
var set2=new Set([1,1,2,3,4,4,5]);
for(let i of set2){
    document.write(i+" - ");
}

