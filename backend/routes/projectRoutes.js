const express = require("express");
const router = express.Router();
const multer = require("multer");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");


// MULTER CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ADD PROJECT
router.post(
  "/",
  auth, // 🔒 ADMIN ONLY
  upload.single("image"),
  async (req, res) => {

  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error("ADD PROJECT ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET PROJECTS
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE PROJECT
router.delete(
  "/:id",
  auth, // 🔒 ADMIN ONLY
  async (req, res) => {

  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
