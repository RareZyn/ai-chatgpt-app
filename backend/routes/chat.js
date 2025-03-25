const express = require("express");
const router = express.Router();
const { sendChatgpt } = require("../controller/sendChatgpt");

router.post("/", sendChatgpt);

module.exports = router; 