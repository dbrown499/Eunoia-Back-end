const db = require("../db/dbConfig.js");

const getListOfPayments = async () => {
    try {
        const listOfPayments = await db.any("SELECT * FROM payments");
        return listOfPayments;
    } catch (err) {
        return err;
    }
};

// const addProduct = async (newItem) => {
//     try {
//         // const addPayment = await db.one(
//         //     "INSERT INTO Payments (type, name, size, price, stock) VALUES($1, $2, $3, $4, $5) RETURNING *",
//         //     [
//         //         newItem.type,
//         //         newItem.name,
//         //         newItem.size,
//         //         newItem.price,
//         //         newItem.stock,
//         //     ]);
//         // return addPayment;
//     } catch (err) {
//         return err;
//     }
// };


module.exports = {
    getListOfPayments    
    // getOneTypeOfProduct,
    // addPayments,
    // updateProductInfo,
    // deleteProductItem
};