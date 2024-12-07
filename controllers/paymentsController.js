const express = require("express");
const payments = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const {
    getListOfPayments,
    getOrderPayments,
    addPayment,
    updatePaymentInfo,
    getPaymentById,
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


payments.post("/", async (req, res) => {
    const addNewPayment = await addPayment(req.body);
    res.status(201).json({ Message: "New payment has been added to the list of payments", newitem: addNewPayment });
});


// payments.post("/", async (req, res) => {
//     try {
//         const { payment_method, amount, currency = "usd" } = req.body;

//         if (!payment_method || !amount ) {
//             return res.status(400).send("Missing required fields: payment_method or amount");
//           }

//           const addNewPayment = await addPayment(req.body);


//       // Create payment intent with Stripe
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount, // Amount in the smallest unit (e.g., cents for USD)
//         currency,
//       });

//       res.status(201).json({
//         message: "New payment has been added to the list of payments",
//         newPayment: addNewPayment,
//         clientSecret: paymentIntent.client_secret,
//       });
// // console.log()
//     } catch (error) {
//     console.error("Error during payment creation:", error.message);
//     res.status(500).send({ error: error.message });
//   }
//   }); 

payments.put("/:payment_id", async (req, res) => {
    const { payment_id } = req.params;
    const { payment_method, currency = "usd" } = req.body;
    let { amount } = req.body;

    try {
        // Fetch amount from the database if not provided in req.body
        if (!amount) {
            amount = await getPaymentById(payment_id);
            if (!amount) {
                return res.status(404).send(`No amount found for payment ID ${payment_id}`);
            }
        }

        amount = Number(amount);
        
        // Update payment information in the database
        const updateInfo = await updatePaymentInfo({ payment_id, payment_method });

        if (!updateInfo.payment_id) {
            return res.status(404).json({ error: `Payment ID ${payment_id} Cannot Be Found` });
        }

        // Create a payment intent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in the smallest unit (e.g., cents for USD)
            currency,
        });

        // Respond with updated payment information and the client secret
        res.status(200).json({
            message: "Payment information has been successfully updated within the database and a payment intent was created.",
            updatedPayment: updateInfo,
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error during payment update or intent creation:", error.message);
        res.status(500).send({ error: error.message });
    }
});


// payments.put("/:payment_id", async (req, res) => {
//     const newInfo = req.body;
//     const { payment_id } = req.params;
//     const updateInfo = await updatePaymentInfo({ payment_id, ...newInfo });

//     if (updateInfo.payment_id) {
//         res.status(200).json({ Message: "Payment information has been successfully updated within the database", updatedPayment: updateInfo });
//     } else {
//         res.status(404).json({ error: `Payment ID ${payment_id} Can Not Be Found` });
//     }
// });


payments.delete("/:payment_id", async (req, res) => {
    const { payment_id } = req.params;

    const deletedPayment = await deletePayment(payment_id);
    if (deletedPayment) {
        res.status(200).json({ message: `The payment has been removed.` });
    } else {
        res.status(404).json({ error: `Payment ID ${payment_id} could not be found` });
    }
});


module.exports = payments;