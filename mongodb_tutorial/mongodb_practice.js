var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbobj = db.db("mydb");

    //******* Insert doc object list.
    // var myObj = [
    //     { Name: "Ruturaj", Status: "Trainee", contact: 7875599000 },
    //     { Name: "Virat", Status: "Player", contact: 7875599123 },
    //     { Name: "Suraj", Status: "Student", contact: 7875599234 },
    //     { Name: "Sanjay", Status: "Manager", contact: 7875599456 },
    //     { Name: "Eknath", Status: "CEO", contact: 7875599789 }
    // ];
    dbobj.createCollection("Person",function(err,res){
        if(err) throw err
        console.log("Person collection created");
    })
    dbobj.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        dbobj.collection("customers").drop(function(err,res){
            if(err) throw err
            console.log("Customers collection dropped");
        })

        //********* Insert documents...
        // dbobj.collection("customer").insertMany(myObj, function (err, res) {
        //     if (err) throw err;

        //     console.log(res.insertedCount + " ducuments inserted");
        //     console.log(res);
        // });
        
        //********Display records and sort function.(1 : ascending , -1 : descending)
        dbobj.collection("customer").find({},{projection : {_id:0,Name:1}}).sort({Name:-1}).toArray(function(err,res){
            if(err) throw err;
            console.log(res);
        });

        //******** Display specific record in array.
        // dbobj.collection("customer").find({},{projection:{_id:0 , Name :1 , Status :1}}).toArray(function(err,res){
        //     if(err) throw err;
        //     console.log(res[3]);
        // });

        //******** Display query result.
        // dbobj.collection("customer").find({Name : /^S/},{projection:{_id:0 , Name :1 , Status :1}}).toArray(function(err,res){
        //     if(err) throw err;
        //     console.log(res);  
        //});
        dbobj.collection("customer").deleteMany({Name : /^T/},function(err,res){
            if(err) throw err;
            console.log(res.deletedCount +"  no of records deleted");
        })
        dbobj.collection("customer").updateMany({Name : "Ruturaj"},{$set :{Status : "Manager"}},function(err,res){
            if(err) throw err;
            console.log(res.modifiedCount +" records updated");
        })
        dbobj.dropCollection("Person",function(err,res){
            if(err) throw err;
            console.log("Person collection deleted")
        })
        dbobj.collection("customer").find({},{projection:{_id:0,Name:1,Status:1,contact:1}}).limit(4).toArray(function(err,res){
            if(err) throw err;
            console.log(res);
            db.close();
        })
    });
    })