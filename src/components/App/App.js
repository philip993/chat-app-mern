import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';

import Navbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Chat from '../Chat/Chat';

const socket = io.connect('http://localhost:4000');

const App = () => {
  useEffect(() => {
    socket.on('welcome', (message) => {
      console.log(message);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/chats" component={Chat} />
      </Switch>
    </div>
  );
};

export default App;
