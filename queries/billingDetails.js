const db = require("../db/dbConfig.js");

const getAllBillingDetails = async () => {
    try {
        const listOfBillingDetails = await db.any("SELECT * FROM billing_details");
        return listOfBillingDetails;
    } catch (err) {
        return err;
    }
};

const getOneBillingDetail = async (id) => {
    try {
        const listOfOneBillingDetail = await db.any(
            "SELECT * FROM billing_details WHERE order_id = $1", [id]
        );
        return listOfOneBillingDetail;
    } catch (err) {
        return err;
    }
};

// const addProduct = async (newItem) => {
//     try {
//         const addItem = await db.one(
//             "INSERT INTO Products (type, name, size, price, stock) VALUES($1, $2, $3, $4, $5) RETURNING *",
//             [
//                 newItem.type,
//                 newItem.name,
//                 newItem.size,
//                 newItem.price,
//                 newItem.stock,
//             ]);
//         return addItem;
//     } catch (err) {
//         return err;
//     }
// };

// const updateProductInfo = async (updateItem) => {
//     try {
//         const updateInfo = await db.one(
//             "UPDATE Products SET type=$1, name=$2, size=$3, price=$4, stock=$5 WHERE product_id=$6 RETURNING *",
//             [
//                 updateItem.type,
//                 updateItem.name,
//                 updateItem.size,
//                 updateItem.price,
//                 updateItem.stock,
//                 updateItem.id
//             ]
//         );
//         return updateInfo;
//     } catch (err) {
//         return err;
//     }
// };

// const deleteProductItem = async (id) => {
//     try {
//         const deletedProduct = await db.any("DELETE FROM Products WHERE product_id=$1 RETURNING *", [id]);
//         // console.log(deletedProduct);
//         return deletedProduct;
//     } catch (err) {
//         console.error("Error deleting product:", err);
//         return err; 
//     }
// };





module.exports = {
    getAllBillingDetails,
    getOneBillingDetail,
    // addProduct,
    // updateProductInfo,
    // deleteProductItem
};