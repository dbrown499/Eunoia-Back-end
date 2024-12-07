const db = require("../db/dbConfig.js");

const getListOfPayments = async () => {
    try {
        const listOfPayments = await db.any("SELECT * FROM payments");
        return listOfPayments;
    } catch (err) {
        return err;
    }
};

const getOrderPayments = async (id) => {
    try {
        const listOfOrderPayments = await db.any("SELECT * FROM payments WHERE order_id = $1", id);
        return listOfOrderPayments;
    } catch (err) {
        return err;
    }
};

const addPayment = async (newItem) => {
    try {
        const addItem = await db.one(
            "INSERT INTO payments ( payment_method, amount) VALUES($1, $2) RETURNING *",
            [
                newItem.payment_method,
                newItem.amount,
            ]);
        return addItem;
    } catch (err) {
        return err;
    }
};

const updatePaymentInfo = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE payments SET payment_method=$1 WHERE payment_id=$2 RETURNING *",
            [
                updateItem.payment_method,
                updateItem.payment_id

            ]
        );
        return updateInfo;
        // console.log(updateInfo)
    } catch (err) {
        return err;
    }
};

const getPaymentById = async (payment_id) => {
    try {
        const payment = await db.one(
            "SELECT amount FROM payments WHERE payment_id = $1",
            [payment_id]
        );
        return payment.amount;
    } catch (error) {
        console.error("Error fetching payment amount:", error);
        throw new Error("Unable to fetch payment amount from the database.");
    }
};


const deletePayment = async (id) => {
    try {
        const deletedPayment = await db.any("DELETE FROM payments WHERE payment_id=$1 RETURNING *", [id]);
        return deletedPayment;
    } catch (err) {
        return err; 
    }
};

module.exports = {
    getListOfPayments,    
    getOrderPayments,
    addPayment,
    updatePaymentInfo,
    getPaymentById,
    deletePayment
};