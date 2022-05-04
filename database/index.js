const express = require('express');
const bodyParse  = require('body-parser');
const cors = require('cors');
const customerRoutes = require('./customer.routes')
const app = express();

app.use(bodyParse.urlencoded({ extended: true}));
app.use(bodyParse.json());
app.use(cors());

app.listen(5000);

app.use(customerRoutes);
