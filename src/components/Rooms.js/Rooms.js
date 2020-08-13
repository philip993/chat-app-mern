import React, { useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io.connect('http://localhost:4000');

const Rooms = () => {
  //   useEffect(() => {
  //     socket.on('message', (message) => {
  //       console.log(message);
  //     });
  //   }, []);
  return (
    <div>
      <h3>ROOM FORM</h3>
      <form>
        <input type="text" placeholder="Username" />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Rooms;
