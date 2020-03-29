import React from 'react';
import '../assets/css/App.css';

import ButtonSend from './ButtonSend';

function MessageForm() {
  return (
    <div>
        <form action="">
          <input placeholder="Enter message" id="m" />
          <ButtonSend />
        </form>
    </div>
  );
}

export default MessageForm;
