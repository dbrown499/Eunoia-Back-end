const express = require("express");
const orders = express.Router();

const {
    getAllOrders,
//   getOneTypeOfPayment,
//   addPayment
//   updatePaymentInfo,
//   deletePaymentItem
} = require('../queries/orders');

orders.get("/", async (req, res) => {
 const getListOfAllDocumentedOrders = await getAllOrders();

 if (getListOfAllDocumentedOrders[0]) {
    res.status(200).json(getListOfAllDocumentedOrders);
  } else {
    res.status(500).json({ error: "No orders are in the database" });
  }
})


module.exports = orders;