const db = require("../db/dbConfig.js");

const getAllOrders = async () => {
    try {
        const listOfOrders = await db.any("SELECT * FROM orders");
        return listOfOrders;
    } catch (err) {
        return err;
    }
};

const getOneOrder = async (id) => {
    try {
        const oneOrder = await db.any("SELECT * FROM orders WHERE order_id = $1", id);
        return oneOrder;
    } catch (err) {
        return err;
    }
};

const addOrder = async (order) => {
    try {
        const addOrderItem = await db.one(
            "INSERT INTO orders (customer_name, customer_email, total_amount) VALUES($1, $2, $3) RETURNING *",
            [
                order.customer_name,
                order.customer_email,
                order.total_amount,
            ]);
        return addOrderItem;
    } catch (err) {
        return err;
    }
};

const updateOrderInfo = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE orders SET customer_name=$1, customer_email=$2, total_amount=$3, order_status=$4 WHERE order_id=$5 RETURNING *",
            [
                updateItem.customer_name,
                updateItem.customer_email,
                updateItem.total_amount,
                updateItem.order_status,
                updateItem.id
            ]
        );
        return updateInfo;
    } catch (err) {
        return err;
    }
};

const deleteOrderItem = async (id) => {
    try {
        const deletedOrder = await db.any("DELETE FROM orders WHERE order_id=$1 RETURNING *", [id]);
        return deletedOrder;
    } catch (err) {
        return err; 
    }
};





module.exports = {
    getAllOrders,
    getOneOrder,
    addOrder,
    updateOrderInfo,
    deleteOrderItem
};