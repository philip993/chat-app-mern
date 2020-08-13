const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { Chat } = require('./backend/Chat/chatModel');

// import routes
// const chats = require('./backend/Chat/chatRoutes');

// MongoDB

// connect to Compass
mongoose
  .connect('mongodb://localhost/chat-app', { useNewUrlParser: true })
  .then((response) => console.log('Connected to MongoDb..'))
  .catch((err) => console.log('Could not connect to MongoDB..'));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-Requested-With, Accept '
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
// use routes
// app.use('/chats', chats);
app.use('/chats', (req, res) => {
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
});

io.on('connection', (socket) => {
  // Welcome message from Server
  console.log('Connection: ' + socket.id);
  socket.emit('welcome', `ChatApp Bot: Welcome to Chat App!`);

  // Broadcast when user connects
  socket.broadcast.emit('userEnter', 'USER has joined chat...');

  // Listen for welcome
  socket.on('welcome', (msg) => {
    console.log(msg);
  });

  // Listen for message
  socket.on('chatMessage', (msg) => {
    Chat.create({ message: msg }, (err, success) => {
      if (err) {
        return err;
      } else {
        console.log('successs');
        io.emit('message', msg);

        Chat.find({}, (err, success) => {
          if (err) {
            return err;
          } else {
            console.log(success);
            const msg = success.map((m) => m.message);
            socket.emit('message', msg);
          }
        });
      }
    });

    console.log(msg);
  });

  // When user disconnects
  socket.on('disconnect', () => {
    console.log('User has left the chat!');
    io.emit('message', 'USER has left chat...');
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Listening on port ${port}.`));

module.exports = io;
