var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Superviolin99!",
    database: "testdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.group("Conected!");
    con.query("SELECT * FROM Customers", function (err, result, fields){
        if (err) throw err;
        console.log(result);
    });
});
