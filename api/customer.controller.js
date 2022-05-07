const dataConn = require('./dataConn');
const mysql = require('mysql');

const getCustomers = async (req, res) => {
    const pool = await dataConn.getConnection(); 
    const sql = "select Id,Name,Precio,Cantidad,Uso from Componentes";
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = "select Id,Name,Precio,Cantidad,Uso from Componentes where id = " + mysql.escape(id);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const createCustomer = async (req, res) => {
    const { name, precio, cantidad, uso } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into Componentes(Name, Precio, Cantidad, Uso) values (?)";
    const values = [ name, precio, cantidad, uso ];

    pool.query(sql, [values], function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
};

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = 'delete from Componentes where id = ' + mysql.escape(id)

    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

const updateCustomer = async (req, res) => {
    const { id, name, precio, cantidad, uso } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update Componentes set name = " + mysql.escape(name) + ", Precio = " + mysql.escape(precio) + ", Cantidad = " + mysql.escape(cantidad) + ", Uso = " + mysql.escape(uso) + " where id = " + mysql.escape(id)
    
    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

module.exports = {
    getCustomers: getCustomers,
    getCustomerById: getCustomerById,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer
}