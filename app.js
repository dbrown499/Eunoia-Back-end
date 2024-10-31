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

app.get("*", (req, res) => {
    res.status(404).send("Page not found: URL is not in the scope of any known routings");
  });

module.exports = app;