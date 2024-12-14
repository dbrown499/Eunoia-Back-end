const express = require("express");
const emails = express.Router();

const {
    getAllEmails,
    addEmail,
    deleteEmail
  } = require('../queries/emails');

emails.get("/", async (req, res) => {
    const allEmails = await getAllEmails();
    if (allEmails[0]) {
      res.status(200).json(allEmails);
    } else {
      res.status(500).json({ error: "No emails are in the database" });
    }
  });

emails.post("/", async (req, res) => {
    const addNewEmail = await addEmail(req.body);
    res.status(201).json({ Message: "New email has been added to the list", newEmail: addNewEmail });
  });

emails.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedEmails = await deleteEmail(id);
      if (deletedEmail) {
        res.status(200).json({ message: `The email has been removed.`});
      } else {
        res.status(404).json({ error: `Email with id ${id} could not be found` });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred while deleting the email." });
    }
  });

  module.exports = emails;