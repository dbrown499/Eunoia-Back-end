const express = require("express");
const payments = express.Router();

const {
    getListOfPayments,
//   getOneTypeOfPayment,
//   addPayment
//   updatePaymentInfo,
//   deletePaymentItem
} = require('../queries/payments');

payments.get("/", async (req, res) => {
 const getListOfAllDocumentedPayments = await getListOfPayments();

 if (getListOfAllDocumentedPayments[0]) {
    res.status(200).json(getListOfAllDocumentedPayments);
  } else {
    res.status(500).json({ error: "No payments are in the database" });
  }
})


// products.post("/", async (req, res) => {
//     const addNewPaymentItem = await addPayment(req.body);
//     res.status(201).json({ Message: "New payment item has been added to the list of available products", newitem: addNewPaymentItem });
//   });

module.exports = payments;