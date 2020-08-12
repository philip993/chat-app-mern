const express = require('express');
const router = express.Router();
const chatCtrl = require('./chatController');

router.get('/', chatCtrl.getChatMessages);

module.exports = router;
