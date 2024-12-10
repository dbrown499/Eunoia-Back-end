const express = require("express");
const products = express.Router();


const {
  getAllProducts,
  getOneTypeOfProduct,
  addProduct,
  updateProductInfo,
  deleteProductItem
} = require('../queries/product')

// const checkValidNewInfo = require('../validations/productValidations')


products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "No products are in the database" });
  }
});


products.get("/:size", async (req, res) => {
  const { size } = req.params;
  const oneTypeOfProduct = await getOneTypeOfProduct(size);
  if (oneTypeOfProduct[0]) {
    res.status(200).json(oneTypeOfProduct);
  } else {
    res.status(500).json({ error: `We don't sell ${size}` });
  }
});


products.post("/", async (req, res) => {
  const addNewProductItem = await addProduct(req.body);
  res.status(201).json({ Message: "New product item has been added to the list of available products", newitem: addNewProductItem });
});

products.put("/:sizeId", async (req, res) => {
  // const newInfo = req.body;
  const { sizeId } = req.params;
  const updateInfo = await updateProductInfo({ sizeId });
  if (updateInfo.size === sizeId) {
    res.status(200).json({ Message: "Inventory has been successfully updated within the database", updatedProduct: updateInfo });
  } else {
    res.status(404).json({ error: `${sizeId} Can Not Be Found` });
  }
});


products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProductItem(id);
    if (deletedProduct) {
      res.status(200).json({ message: `The product has been removed.`});
    } else {
      res.status(404).json({ error: `Item with id ${id} could not be found` });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the product." });
  }
});



module.exports = products;