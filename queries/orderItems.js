const db = require("../db/dbConfig.js");

const getAllOrderItems = async () => {
    try {
        const listOfOrderItems = await db.any("SELECT * FROM order_items");
        return listOfOrderItems;
    } catch (err) {
        return err;
    }
};

const getOneOrderItem = async (orderItemId) => {
    try {
        const orderItem = await db.any("SELECT * FROM order_items WHERE order_item_id = $1", orderItemId);
        return orderItem;
    } catch (err) {
        return err;
    }
};

const addOrderItem = async (newItem) => {
    try {
        const addOrderItem = await db.one(
            "INSERT INTO order_items (order_id, product_size, taxes, price_per_unit) VALUES($1, $2, $3, $4) RETURNING *",
            [
                newItem.order_id,
                newItem.product_size,
                newItem.taxes,
                newItem.price_per_unit,
            ]);
        return addOrderItem;
    } catch (err) {
        return err;
    }
};

const updateOrderItemInfo = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE order_items SET order_id=$1, product_size=$2, taxes=$3, price_per_unit=$4 WHERE order_item_id=$5 RETURNING *",
            [
                updateItem.order_id,
                updateItem.product_size,
                updateItem.taxes,
                updateItem.price_per_unit,
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
    getOneOrderItem,
    addOrderItem,
    updateOrderItemInfo,
    deleteOrderItem
};