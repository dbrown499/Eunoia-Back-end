const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Welcome To Eunoia');
});

const productsController = require("./controllers/productsController.js");
app.use("/products", productsController);

const ordersController = require("./controllers/ordersController.js");
app.use("/orders", ordersController);

const orderItemsController = require("./controllers/orderItemsController.js");
app.use("/order-items", orderItemsController);

const billingDetailsController = require("./controllers/billingDetailsController.js");
app.use("/billing-details", billingDetailsController);

const paymentsController = require("./controllers/paymentsController.js");
app.use("/payments", paymentsController);


app.get("*", (req, res) => {
    res.status(404).send("Page not found: URL is not in the scope of any known routings");
  });

module.exports = app;