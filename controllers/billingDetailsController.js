const express = require("express");
const billingDetails = express.Router();

const {
  getAllBillingDetails,
  getOneBillingDetail,
  addBillingDetails,
  updateBillingDetails,
  deleteBillingDetails
} = require('../queries/billingDetails');


billingDetails.get("/", async (req, res) => {
  const allBillingDetails = await getAllBillingDetails();
  if (allBillingDetails) {
    res.status(200).json(allBillingDetails);
  } else {
    res.status(500).json({ error: "No billing details are in the database" });
  }
});


billingDetails.get("/:order_id", async (req, res) => {
  const { order_id } = req.params;
  const oneBillingDetail = await getOneBillingDetail(order_id);
  if (oneBillingDetail[0]) {
    res.status(200).json(oneBillingDetail);
  } else {
    res.status(500).json({ error: `No billing information for order Id ${id}` });
  }
});


billingDetails.post("/", async (req, res) => {
  const addNewBillingDetails = await addBillingDetails(req.body);
  res.status(201).json({ Message: "New billing information has been added to the list", newBillingDetails: addNewBillingDetails });
});

billingDetails.put("/:billing_id", async (req, res) => {
  const newInfo = req.body;
  const { billing_id } = req.params;
  const updateInfo = await updateBillingDetails({ billing_id, ...newInfo });

  if (updateInfo.billing_id) {
    res.status(200).json({ Message: "Billing details has been successfully updated within the database", updatedBillingDetails: updateInfo });
  } else {
    res.status(404).json({ error: `ID ${billing_id} Can Not Be Found` });
  }
});


billingDetails.delete("/:billing_id", async (req, res) => {
  const { billing_id } = req.params;
  const deletedBillingDetails = await deleteBillingDetails(billing_id);
  if (deletedBillingDetails) {
    res.status(200).json({ message: `The billing information has been removed.` });
  } else {
    res.status(404).json({ error: `Billing information with ID ${billing_id} could not be found` });
  }
});



module.exports = billingDetails;