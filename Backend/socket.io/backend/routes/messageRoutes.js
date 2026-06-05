const express = require("express");
const router = express.Router();

const {getMessages} = require("../controllers/messageController");

router.get("/" , getMessages);

module.exports = router;