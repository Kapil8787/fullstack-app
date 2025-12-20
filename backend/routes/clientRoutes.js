const express = require("express");
const router = express.Router();
const multer = require("multer");
const Client = require("../models/Client");

// MULTER CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ADD CLIENT
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const client = new Client({
      name: req.body.name,
      designation: req.body.designation,
      description: req.body.description,
      image: req.file.path, 
    });

    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET CLIENTS
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// DELETE CLIENT
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client deleted" });
});

module.exports = router;
