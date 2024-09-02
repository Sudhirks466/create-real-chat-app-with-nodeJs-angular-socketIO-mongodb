// backend/routes/chat.js
const express = require('express');
const Message = require('../models/message');
const router = express.Router();

// Get all chat messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save a chat message
router.post('/', async (req, res) => {
  const newMessage = new Message({
    user: req.body.user,
    message: req.body.message
  });

  try {
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
