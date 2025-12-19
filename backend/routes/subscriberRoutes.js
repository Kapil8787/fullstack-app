const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// Subscribe email (User)
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all subscribers (Admin)
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
