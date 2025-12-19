const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all contacts (Admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
