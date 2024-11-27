const express = require("express");
const payments = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const {
    getListOfPayments,
    getOrderPayments,
    addPayment,
    updatePaymentInfo,
    deletePayment
} = require('../queries/payments');

payments.get("/test", (req, res) => {
    res.send("Payments controller is working!");
  });

  

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


// payments.post("/", async (req, res) => {
//     const addNewPayment = await addPayment(req.body);
//     res.status(201).json({ Message: "New payment has been added to the list of payments", newitem: addNewPayment });
// });


payments.post("/", async (req, res) => {
    try {
        const { order_id, payment_method, amount, payment_status, currency = "usd" } = req.body;
  
        if (!order_id || !payment_method || !amount ) {
            return res.status(400).send("Missing required fields: order_id, payment_method, amount, or payment_status");
          }

          const addNewPayment = await addPayment(req.body);

  
      // Create payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // Amount in the smallest unit (e.g., cents for USD)
        currency,
      });
  
      res.status(201).json({
        message: "New payment has been added to the list of payments",
        newPayment: addNewPayment,
        clientSecret: paymentIntent.client_secret,
      });

    } catch (error) {
    console.error("Error during payment creation:", error.message);
    res.status(500).send({ error: error.message });
  }
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