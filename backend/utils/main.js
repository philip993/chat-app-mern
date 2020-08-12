const socketio = require('socket.io');
const io = socketio.connect('http://localhost:4000');

const socketHelper = () => {
  io.on('connection', (socket) => {
    socket.broadcast.emit('ChatBot message');

    socket.on('disconnect', () => {
      socket.broadcast.emit('DISCONNECT');
    });
  });
};

module.exports = socketHelper;
