const express = require("express");
const payments = express.Router();

const {
    getListOfPayments,
    getOrderPayments,
    addPayment,
    updatePaymentInfo,
    deletePayment
} = require('../queries/payments');

payments.get("/", async (req, res) => {
    const getListOfAllDocumentedPayments = await getListOfPayments();

    if (getListOfAllDocumentedPayments[0]) {
        res.status(200).json(getListOfAllDocumentedPayments);
    } else {
        res.status(500).json({ error: "No payments are in the database" });
    }
});

payments.get("/:order_id", async (req, res) => {
    const { order_id } = req.params;
    const getListOfOrderPayments = await getOrderPayments(order_id);

    if (getListOfOrderPayments[0]) {
        res.status(200).json(getListOfOrderPayments);
    } else {
        res.status(500).json({ error: `There are no payments for order ID ${order_id}` });
    }
});


payments.post("/", async (req, res) => {
    const addNewPayment = await addPayment(req.body);
    res.status(201).json({ Message: "New payment has been added to the list of payments", newitem: addNewPayment });
});


payments.put("/:payment_id", async (req, res) => {
    const newInfo = req.body;
    const { payment_id } = req.params;
    const updateInfo = await updatePaymentInfo({ payment_id, ...newInfo });

    if (updateInfo.payment_id) {
        res.status(200).json({ Message: "Payment information has been successfully updated within the database", updatedPayment: updateInfo });
    } else {
        res.status(404).json({ error: `Payment ID ${payment_id} Can Not Be Found` });
    }
});


payments.delete("/:payment_id", async (req, res) => {
    const { payment_id } = req.params;
  
      const deletedPayment = await deletePayment(payment_id);
      if (deletedPayment) {
        res.status(200).json({ message: `The payment has been removed.`});
      } else {
        res.status(404).json({ error: `Payment ID ${payment_id} could not be found` });
      }
  });


module.exports = payments;