var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbObj = db.db("mydb_join");
//   dbObj.createCollection("Products",function(err,res){
//     if(err) throw err
//     console.log("Product created");
//   });
//   dbObj.createCollection("Orders",function(err,res){
//     if(err) throw err
//     console.log("Orders created");
//   });
//   dbObj.collection("Products").insertMany([
//       { _id: 154, name: 'Chocolate Heaven' },
//       { _id: 155, name: 'Tasty Lemons' },
//       { _id: 156, name: 'Vanilla Dreams' }
//   ])
//   dbObj.collection("Orders").insertMany([
//     { _id: 1, product_id: 154, status: 1 },
//     { _id: 2, product_id: 155, status: 5 }
//   ])
//   dbObj.collection("Products").find({}).toArray(function(err,res){
//       if(err) throw err;
//       console.log(res);
//   })
//   dbObj.collection("Orders").find({}).toArray(function(err,res){
//     if(err) throw err;
//     console.log(res);
// })
  
  dbObj.collection('Orders').aggregate([
    { $lookup:
       {
         from: 'Products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});





