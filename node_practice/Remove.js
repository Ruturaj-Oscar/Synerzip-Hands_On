// var fs = require('fs');

// fs.unlink('DeleteFile.txt', function (err) {
//   if (err) 
//     throw err;
//   console.log('File deleted!');
// });
var url = require('url');
var adr = 'https://www.w3schools.com/nodejs/nodejs_url.asp';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 
//console.log(q.search); 
