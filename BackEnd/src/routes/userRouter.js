const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

// Route để tạo user (POST)
router.post('/', userController.createUser);

// Route kiểm tra API có hoạt động không (GET)
router.get('/', (req, res) => {
    res.status(200).json({ message: "User API is working!" });
});

module.exports = router;
