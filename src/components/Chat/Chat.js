import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { chatMsgInput, fullChatMsgs, requestGetMessages } from './ChatActions';
const socket = io.connect('http://localhost:4000');

const Chat = () => {
  const { message, messages, allMsgs } = useSelector(
    (state) => state.ChatReducer
  );
  const dispatch = useDispatch();
  const [all, setAll] = useState(['smt']);

  // useEffect(() => {

  //   socket.on('userEnter', (msg) => {
  //     console.log(msg);
  //   });
  // }, [all]);

  useEffect(() => {
    dispatch(requestGetMessages());
    socket.on('message', (message) => {
      console.log(message);
      setAll(message);
    });

    socket.on('userEnter', (msg) => {
      console.log(msg);
    });
  }, [all]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chatMessage', message);
    dispatch(fullChatMsgs({ message }));
  };

  const handleMessageInput = (e) => {
    // setMessage(e.target.value);
    dispatch(chatMsgInput(e.target.value));
  };

  return (
    <div>
      <h4>CHAT</h4>
      {allMsgs.map((msg, index) => (
        <p>{msg.message}</p>
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
