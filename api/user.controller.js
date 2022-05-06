const dataConn = require('./dataConn');
const mysql = require('mysql');


const login = async (req, res) => {
    const { userName, password } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "select Id, userName, name, profile from Users where userName = " + mysql.escape(userName) + " and password = " + mysql.escape(password);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

module.exports = {
    login: login
}