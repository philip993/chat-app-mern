const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
global._io = io;

// import routes
const chats = require('./backend/Chat/chatRoutes');

// MongoDB
mongoose
  .connect('mongodb://localhost/chat-app', { useNewUrlParser: true })
  .then((response) => console.log('Connected to MongoDb..'))
  .catch((err) => console.log('Could not connect to MongoDB..'));

// CORS
app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-Requested-With, Accept '
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
// use routes
app.use('/chats', chats);

io.on('connection', (socket) => {
  // Welcome message from Server
  console.log('Connection: ' + socket.id);
  socket.emit('message', `ChatApp Bot: Welcome to Chat App!`);

  // Broadcast when user connects
  socket.broadcast.emit('message', 'USER has joined chat...');

  // Listen for message
  socket.on('chatMessage', (msg) => {
    io.emit('message', msg);
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
