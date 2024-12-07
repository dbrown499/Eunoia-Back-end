const db = require("../db/dbConfig.js");

const getAllEmails = async () => {
    try {
        const listOfEmails= await db.any("SELECT * FROM emails");
        return listOfEmails;
    } catch (err) {
        return err;
    }
};

const addEmail = async (newCustomerEmail) => {
    try {
        const addBillingDetails = await db.one(
            "INSERT INTO emails (name_of_email) VALUES($1) RETURNING *",
            [
                newCustomerEmail.name_of_email,
            ]);
        return addBillingDetails;
    } catch (err) {
        return err;
    }
};


module.exports = {
    getAllEmails,
    addEmail
};