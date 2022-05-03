const dataConn = require('./dataConn');
const sql = requiere('mssql');

const getCustomers = async(req, res) => {
    const pool =  await dataConn.getConnection();
    const result = await pool.request().query('select Id,Name,Phone,Address,Email,FORMAT(DateOfBirth,\'yyyy-MM-dd\') DateOfBirth from Customers');
    return res.json(result.recordset);
};

const getCustomerById = async(req, res) =>{
    const { id } = req.params;
    
    const pool =  await dataConn.getConnection();
    const result = await pool.request()
        .input("id", sql.Int, id)
        .query('select Id,Name,Phone,Address,Email,FORMAT(DateOfBirth,\'yyyy-MM-dd\') DateOfBirth from Customers where id = @id');
    return res.json(result.recordset);
}

const createCustomer = async(req,res) => {
    const { name, phone, address, email, dateOfBirth } = req.body;
    
    const pool = await dataConn.getConnection();
    await pool.request()
            .input("Name", sql.VarChar, name)
            .input("Phone", sql.VarChar, phone)
            .input("Address", sql.VarChar, address)
            .input("Email", sql.VarChar, email)
            .input("DateOfBirth", sql.Date, dateOfBirth)
            .query("insert into Customers(Name, Phone, Address, Email, DateOfBirth) values(@name, @phone, @address, @email, @dtaeOfBirth)");
    return res.json('OK');

}

const deleteCustomer = async(req,res) => {
    const { id } = req.params;
    
    const pool = await dataConn.getConnection();
    await pool.request()
            .input("id", sql.Int, id)
            .query('delete Customers where id = @id');
    return res.json('OK');

}

const updateCustomer = async(req,res) => {
    const {id, name, phone, address, email, dateOfBirth} = req.body;
    
    const pool = await dataConn.getConnection();
    await pool.request()
            .input("Id", sql.Int, id)
            .input("Name", sql.VarChar, name)
            .input("Phone", sql.VarChar, phone)
            .input("Address", sql.VarChar, address)
            .input("Email", sql.VarChar, email)
            .input("DateOfBirth", sql.VarChar, dateOfBirth)
            .query("update Customers set name = @name, phone = @phone, address = @adress, email = @email, dateOfBirth = @dateOfBirth where id = @id");
    return res.json('OK');

}

module.exports = {
    getCustomers: getCustomers,
    getCustomerById: getCustomerById,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer
}