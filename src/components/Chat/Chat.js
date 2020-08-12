import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { chatMsgInput, fullChatMsgs } from './ChatActions';
const socket = io.connect('http://localhost:4000');

const Chat = () => {
  const { message, messages } = useSelector((state) => state.ChatReducer);
  const dispatch = useDispatch();
  //   const [message, setMessage] = useState('');
  //   const [messages, setMessages] = useState([]);
  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chatMessage', message);
    dispatch(fullChatMsgs({ message }));
    console.log(message);
  };

  const handleMessageInput = (e) => {
    // setMessage(e.target.value);
    dispatch(chatMsgInput(e.target.value));
  };

  return (
    <div>
      <h4>CHAT</h4>
      {messages.map((m) => (
        <h1>{m.message}</h1>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="message"
          value={message}
          onChange={handleMessageInput}
          placeholder="type message..."
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
