const db = require("../db/dbConfig.js");

const getAllOrderItems = async () => {
    try {
        const listOfOrderItems = await db.any("SELECT * FROM order_items");
        return listOfOrderItems;
    } catch (err) {
        return err;
    }
};

const getOnePersonsOrderList = async (orderId) => {
    try {
        const listOfPersonsOrderItems = await db.any("SELECT * FROM order_items WHERE order_id = $1", orderId);
        return listOfPersonsOrderItems;
    } catch (err) {
        return err;
    }
};

const addOrderItem = async (newItem) => {
    try {
        const addOrderItem = await db.one(
            "INSERT INTO order_items (order_id, product_id, quantity, price_per_unit, total_price) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [
                newItem.order_id,
                newItem.product_id,
                newItem.quantity,
                newItem.price_per_unit,
                newItem.total_price,
            ]);
        return addOrderItem;
    } catch (err) {
        return err;
    }
};

const updateOrderItemInfo = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE order_items SET order_id=$1, product_id=$2, quantity=$3, price_per_unit=$4, total_price=$5 WHERE order_item_id=$6 RETURNING *",
            [
                updateItem.order_id,
                updateItem.product_id,
                updateItem.quantity,
                updateItem.price_per_unit,
                updateItem.total_price,
                updateItem.order_item_id
            ]
        );
        return updateInfo;
    } catch (err) {
        return err;
    }
};

const deleteOrderItem = async (orderItemId) => {
    try {
        const deletedorderItem = await db.any("DELETE FROM order_items WHERE order_item_id=$1 RETURNING *", [orderItemId]);
        return deletedorderItem;
    } catch (err) {
        return err; 
    }
};





module.exports = {
    getAllOrderItems,
    getOnePersonsOrderList,
    addOrderItem,
    updateOrderItemInfo,
    deleteOrderItem
};