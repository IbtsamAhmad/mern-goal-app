const express = require("express");
const {
  loginUser,
  registerUser,
  getMe,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);

router.post("/", registerUser);

router.get("/me", protect, getMe);

module.exports = router;
