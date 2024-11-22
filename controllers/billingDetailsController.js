const express = require("express");
const billingDetails = express.Router();

const {
  getAllBillingDetails,
  getOneBillingDetail,
//   addProduct,
//   updateProductInfo,
//   deleteProductItem
} = require('../queries/billingDetails');


billingDetails.get("/", async (req, res) => {
  const allBillingDetails = await getAllBillingDetails();
  if (allBillingDetails[0]) {
    res.status(200).json(allBillingDetails);
  } else {
    res.status(500).json({ error: "No billing details are in the database" });
  }
});


billingDetails.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneBillingDetail = await getOneBillingDetail(id);
  if (oneBillingDetail[0]) {
    res.status(200).json(oneBillingDetail);
  } else {
    res.status(500).json({ error: `No billing information for order Id ${id}` });
  }
});


// products.post("/", async (req, res) => {
//   const addNewProductItem = await addProduct(req.body);
//   res.status(201).json({ Message: "New product item has been added to the list of available products", newitem: addNewProductItem });
// });

// products.put("/:id", async (req, res) => {
//   const newInfo = req.body;
//   const { id } = req.params;
//   // console.log({ type, ...newInfo })
//   const updateInfo = await updateProductInfo({ id, ...newInfo });
//   if (updateInfo.product_id) {
//     res.status(200).json({ Message: "Inventory has been successfully updated within the database", updatedProduct: updateInfo });
//   } else {
//     res.status(404).json({ error: `ID ${id} Can Not Be Found` });
//   }
// });


// // products.delete("/:id", async (req, res) => {
// //     const { id } = req.params;
// //     const deletedProduct = await deleteProductItem(id);

// //     if(deletedProduct.id) {
// //         res.status(200).json({ message: `The clothing item called "${deletedProduct.type}" has been removed.`, product:  deletedProduct});
// //     } else {
// //         res.status(404).json( {error: `Item located at id ${id} could not be found `});
// //     }
// // });

// products.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedProduct = await deleteProductItem(id);
//     if (deletedProduct) {
//       res.status(200).json({ message: `The product has been removed.`});
//     } else {
//       res.status(404).json({ error: `Item with id ${id} could not be found` });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while deleting the product." });
//   }
// });



module.exports = billingDetails;