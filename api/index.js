const express = require('express');
const bodyP = require('body-parser');
const cors = require('cors');
const customerRoutes = require('./customer.routes');
const userRoutes = require('./user.routes');
const app = express();

app.use(bodyP.urlencoded({ extended: true }));
app.use(bodyP.json());
app.use(cors());

app.listen(5000);

app.use(userRoutes);
app.use(customerRoutes);
