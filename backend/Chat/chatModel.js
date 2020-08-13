const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model('Chat', chatSchema);
exports.Chat = Chat;
