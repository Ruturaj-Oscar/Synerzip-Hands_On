
const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'synerzip',
    database: 'mydb1'
});
var sqldel = "DELETE FROM customers WHERE Id = 2";
var sql = "insert into sample values (99,'Ruturaj','Kothrud',7875599000,'2018-05-08');";
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //     con.query(sql,function(err,result)
    //     {
    //         console.log("Result : "+ result.affectedRows);
    //     });
    //   con.query(sqldel,function(err,result)
    //     {
    //         console.log("Deleted" + result.affectedRows);
    //   });
    //   con.query("SELECT * FROM sample", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    //     var sqlupdate = "UPDATE sample SET address = 'Canyon 123' WHERE Id = 99";
    //     con.query(sqlupdate, function (err, result) {
    //     if (err) throw err;
    //     console.log(result.affectedRows + " record(s) updated");
    //   });
    var sqljoin = "SELECT sample2.job AS job,sample2.company AS company, sample.name AS Employee,sample.phine AS mobile FROM sample JOIN sample2 ON sample.Id = sample2.Cid";
    con.query(sqljoin, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.query("SELECT * FROM sample", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
});

