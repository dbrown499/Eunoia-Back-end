const express = require("express");
const orderItems = express.Router();

const {
  getAllOrderItems,
  getOnePersonsOrderList,
  addOrderItem,
  updateOrderItemInfo,
  deleteOrderItem
} = require('../queries/orderItems');


orderItems.get("/", async (req, res) => {
  const allOrderItems = await getAllOrderItems();
  if (allOrderItems[0]) {
    res.status(200).json(allOrderItems);
  } else {
    res.status(500).json({ error: "No order items are in the database" });
  }
});


orderItems.get("/:order_id", async (req, res) => {
  const { order_id } = req.params;
  const onePersonsOrderList = await getOnePersonsOrderList(order_id);
  if (onePersonsOrderList[0]) {
    res.status(200).json(onePersonsOrderList);
  } else {
    res.status(500).json({ error: `There are no order items associated with ID ${order_id}` });
  }
});


orderItems.post("/", async (req, res) => {
  const addNewOrderItem = await addOrderItem(req.body);
  res.status(201).json({ Message: "New order item has been added to the list of order items", newOrderItem: addNewOrderItem });
});

orderItems.put("/:order_item_id", async (req, res) => {
  const newInfo = req.body;
  const { order_item_id } = req.params;
  const updateInfo = await updateOrderItemInfo({ order_item_id, ...newInfo });

  if (updateInfo.order_item_id) {
    res.status(200).json({ Message: "Order item has been successfully updated within the database", updatedOrderItem: updateInfo });
  } else {
    res.status(404).json({ error: `Order Item ID ${order_item_id} Can Not Be Found` });
  }
});


orderItems.delete("/:order_item_id", async (req, res) => {
    const { order_item_id } = req.params;
    const deletedOrderItem = await deleteOrderItem(order_item_id);

    if(deletedOrderItem) {
        res.status(200).json({ message: `The order item ID ${order_item_id} has been removed`});
    } else {
        res.status(404).json( {error: `Order item ID ${order_item_id} could not be found `});
    }
});





module.exports = orderItems;