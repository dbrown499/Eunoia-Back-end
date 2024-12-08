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

const addBillingDetails = async (newDetails) => {
    try {
        const addBillingDetails = await db.one(
            "INSERT INTO billing_details (order_id, full_name, address_line1, city, state, postal_code, country, phone_number, email) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [
                newDetails.order_id,
                newDetails.full_name,
                newDetails.address_line1,
                newDetails.city,
                newDetails.state,
                newDetails.postal_code,
                newDetails.country,
                newDetails.phone_number,
                newDetails.email
            ]);
        return addBillingDetails;
    } catch (err) {
        return err;
    }
};

const updateBillingDetails = async (updateItem) => {
    try {
        const updateInfo = await db.one(
            "UPDATE billing_details SET order_id=$1, full_name=$2, address_line1=$3, city=$4, postal_code=$5, country=$6, phone_number=$7, email=$8  WHERE billing_id=$9 RETURNING *",
            [
                updateItem.order_id,
                updateItem.full_name,
                updateItem.address_line1,
                updateItem.city,
                updateItem.postal_code,
                updateItem.country,
                updateItem.phone_number,
                updateItem.email,
                updateItem.billing_id
            ]
        );
        return updateInfo;
    } catch (err) {
        return err;
    }
};

const deleteBillingDetails = async (id) => {
    try {
        const deletedBillingDetails = await db.any("DELETE FROM billing_details WHERE billing_id=$1 RETURNING *", [id]);
        return deletedBillingDetails;
    } catch (err) {
        return err; 
    }
};


module.exports = {
    getAllBillingDetails,
    getOneBillingDetail,
    addBillingDetails,
    updateBillingDetails,
    deleteBillingDetails
};