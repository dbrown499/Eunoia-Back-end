const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
    try {
        const listOfProducts = await db.any("SELECT * FROM Products");
        return listOfProducts;
    } catch (err) {
        return err;
    }
};

const getOneTypeOfProduct = async (size) => {
    try {
        const listOfOneTypeOfProduct = await db.any("SELECT * FROM Products WHERE size LIKE $1 ", size);
        return listOfOneTypeOfProduct;
    } catch (err) {
        return err;
    }
};

const addProduct = async (newItem) => {
    try {
        const addItem = await db.one(
            "INSERT INTO Products (type, name, description, size, price, stock, image_url) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                newItem.type,
                newItem.name,
                newItem.description,
                newItem.size,
                newItem.price,
                newItem.stock,
                newItem.image_url,
            ]);
        return addItem;
    } catch (err) {
        return err;
    }
};

const updateProductInfo = async (updateItem) => {
    try {

        
                const currentInfo = await db.one(
                    "SELECT stock FROM Products WHERE size=$1 ", 
                    [updateItem.sizeId]
                );


        // Ensure the product exists and stock is valid
        if (!currentInfo || currentInfo.stock <= 0) {
            throw new Error("SOLD OUT");
        }

        // Update the stock by decrementing it
        const updateInfo = await db.one(
            "UPDATE Products SET stock=$1 WHERE size=$2 RETURNING *",
            [currentInfo.stock - 1, updateItem.sizeId]
        );

        return updateInfo;

            // console.log(currentInfo)

        // const updateInfo = await db.one(
        //     "UPDATE Products SET stock=$1 WHERE size=$2 RETURNING *",
        //     [
        //         // updateItem.type,
        //         // updateItem.name,
        //         // updateItem.size,
        //         // updateItem.price,
        //         updateItem.stock - 1,
        //         updateItem.sizeId
        //     ]
        // );
        // return updateInfo;
    } catch (err) {
        return err;
    }
};

const deleteProductItem = async (id) => {
    try {
        const deletedProduct = await db.any("DELETE FROM Products WHERE product_id=$1 RETURNING *", [id]);
        // console.log(deletedProduct);
        return deletedProduct;
    } catch (err) {
        console.error("Error deleting product:", err);
        return err; 
    }
};


module.exports = {
    getAllProducts,
    getOneTypeOfProduct,
    addProduct,
    updateProductInfo,
    deleteProductItem
};