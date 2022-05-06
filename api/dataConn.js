const mysql = require('mysql');

const dbSettings = {
    host: "localhost",
    user: "root",
    password: "Superviolin99!",
    database: "testdb"
}

async function getConnection(){
    try{
        const pool = await mysql.createConnection(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getConnection: getConnection
}