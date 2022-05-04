const dataConn = require('./dataConn');
const mysql = require('mysql');


const getCustomers = async(req, res) => {
    const pool =  await dataConn.getConnection();
    const sql = 'select Id,Name,Phone,Address,Email,DATE_FORMAT(DateOfBirth,\'yyyy-MM-dd\') DateOfBirth from Customers';
    pool.query(sql, function (err, result, fields){
        return res.json(result);
    });
};

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    const pool =  await dataConn.getConnection();
    const sql = 'select Id,Name,Phone,Address,Email,DATE_FORMAT(DateOfBirth,\'yyyy-MM-dd\') DateOfBirth from Customers where id = ' + mysql.escape(id);

    pool.query(sql, function (err, result, fields){
        if (err) throw err;
        return res.json(result);
    });

}

const createCustomer = async(req,res) => {
    const { name, phone, address, email, dateOfBirth } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into Customers(Name, Phone, Address, Email, DateOfBirth) values(?)";
    const values = [name, phone, address, email, dateOfBirth];

    pool.query(sql, [values], function (err, result){
        if (err) throw err;
        return res.json("OK");
    });

}

const deleteCustomer = async(req,res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = 'delete from Customers where id = ' + mysql.escape(id)

    pool.query(sql, function (err, result){
        if (err) throw err;
        return res.json("OK");
    });
}

const updateCustomer = async(req,res) => {
    const {id, name, phone, address, email, dateOfBirth} = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update Customers set name = " + mysql.escape(name) + ", phone = " + mysql.escape(phone) + ", address = " + mysql.escape(address) + ", email = " + mysql.escape(email) + ", dateOfBirth = " + mysql.escape(dateOfBirth);

    pool.query(sql, function (err, result){
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