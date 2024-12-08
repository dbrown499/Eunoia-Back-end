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
            "INSERT INTO orders (item_count, total_amount) VALUES($1, $2) RETURNING *",
            [
                order.item_count,
                order.total_amount
            ]);
        return addOrderItem;
    } catch (err) {
        return err;
    }
};

const updateOrderInfo = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE orders SET item_count=$1, total_amount=$2 WHERE order_id=$3 RETURNING *",
            [
                updateItem.item_count,
                updateItem.total_amount,
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