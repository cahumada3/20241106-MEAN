// this allows our application to draw from the .env file and get its properties
require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json);

const salespersonLogger = require('./middleware/salesperson-middleware')

const salespersonRouter = require('./controllers/salesperson-controller');
app.use('/salesperson', salespersonRouter, salespersonLogger);

// we're routing requests to other files for processing
const saleRouter = require('./controllers/sale-controller');
app.use('/sale', saleRouter);

// uses the .env variable to initialize our port number
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is up and running on Port ${port}!`);
});