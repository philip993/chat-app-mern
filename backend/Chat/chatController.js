const { Chat } = require('./chatModel');

exports.getChatMessages = (req, res) => {
  res.send('ALL CHAT MESSAGES');
};

exports.newChatMessage = (req, res) => {};
