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
            "INSERT INTO payments (order_id, payment_method, amount) VALUES($1, $2, $3) RETURNING *",
            [
                newItem.order_id,
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
            "UPDATE payments SET order_id=$1, payment_method=$2, amount=$3 WHERE payment_id=$4 RETURNING *",
            [
                updateItem.order_id,
                updateItem.payment_method,
                updateItem.amount,
                updateItem.payment_id

            ]
        );
        return updateInfo;
    } catch (err) {
        return err;
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
    deletePayment
};