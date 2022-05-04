const express = require('express');
const customerController = require('./customer.controller');
const router = express.Router();

router.get('/customer', customerController.getCustomers);
router.get('/customer/:id', customerController.getCustomerById);
router.post('/customer', customerController.createCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);
router.put('/customer', customerController.updateCustomer);

module.exports = router;