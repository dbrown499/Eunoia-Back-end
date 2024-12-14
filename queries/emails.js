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

const deleteEmail = async (id) => {
    try {
        const deletedEmail = await db.any("DELETE FROM emails WHERE email_id=$1 RETURNING *", [id]);
        return deletedEmail;
    } catch (err) {
        console.error("Error deleting email:", err);
        return err; 
    }
};


module.exports = {
    getAllEmails,
    addEmail,
    deleteEmail
};