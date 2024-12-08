const express = require("express");
const orders = express.Router();

const {
    getAllOrders,
    getOneOrder,
    addOrder,
    updateOrderInfo,
    deleteOrderItem
} = require('../queries/orders');

orders.get("/", async (req, res) => {
 const getListOfAllDocumentedOrders = await getAllOrders();

 if (getListOfAllDocumentedOrders[0]) {
    res.status(200).json(getListOfAllDocumentedOrders);
  } else {
    res.status(500).json({ error: "No orders are in the database" });
  }
});

orders.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneOrder = await getOneOrder(id);
    if (oneOrder[0]) {
      res.status(200).json(oneOrder);
    } else {
      res.status(500).json({ error: `No orders with ID ${id}` });
    }
  });
  
  
  orders.post("/", async (req, res) => {
    const addNewOrder = await addOrder(req.body);
    res.status(201).json({ Message: "New order item has been added to the list of orders ", newOrder: addNewOrder });
  });
  
  orders.put("/:id", async (req, res) => {
    const newInfo = req.body;
    const { id } = req.params;
    const updateInfo = await updateOrderInfo({ id, ...newInfo });
    if (updateInfo.order_id) {
      res.status(200).json({ Message: "Order item has been successfully updated within the database", updatedOrder: updateInfo });
    } else {
      res.status(404).json({ error: `Order ID ${id} Can Not Be Found` });
    }
  });
  
  
  orders.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedOrder = await deleteOrderItem(id);
      if (deletedOrder) {
        res.status(200).json({ message: `The order has been removed.`});
      } else {
        res.status(404).json({ error: `Order item with id ${id} could not be found` });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred while deleting the order." });
    }
  });


module.exports = orders;