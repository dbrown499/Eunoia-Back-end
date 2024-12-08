const express = require("express");
const emails = express.Router();

const {
    getAllEmails,
    addEmail
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

  module.exports = emails;