const { Chat } = require('./chatModel');

exports.getChatMessages = (req, res) => {
  Chat.find({})
    .then((chats) => {
      res.status(200).json({
        chats,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'CANNOT LOAD MESSAGES!',
      });
    });
};

exports.newChatMessage = (req, res) => {};
