
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Superviolin99!',
  database : 'parcial2_a01244818'
});
 
connection.connect();
 
connection.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES ('Erik Martinez', 'A01244818','A01244818@tec.mx','Sistemas Digitales y Robótica'), ('Luis Martinez', 'A01267676','A01267676@tec.mx','Mecatrónica') ", function (error, result, fields) {
  if (error) throw error;
  console.log("-----Se INSERTAN registros ------")
  console.log(result);
});

connection.query("SELECT * FROM Alumnos", function (error, result, fields) {
    if (error) throw error;
    console.log("-----Se CONSULTAN registros ------")
    console.log(result);
  });

connection.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2", function (error, result, fields) {
    if (error) throw error;
    console.log("-----Se ACTUALIZAN registros ------")
    console.log(result);
  });

connection.query("SELECT * FROM Alumnos", function (error, result, fields) {
    if (error) throw error;
    console.log("-----Se CONSULTAN registros------")
    console.log(result);
  });

connection.query("DELETE FROM Alumnos WHERE Id = 2", function (error, result, fields) {
    if (error) throw error;
    console.log("-----Se BORRAN registros ------")
    console.log(result);
  });

connection.query("SELECT * FROM Alumnos", function (error, result, fields) {
    if (error) throw error;
    console.log("-----Se CONSULTAN registros ------")
    console.log(result);
  });
connection.end();

