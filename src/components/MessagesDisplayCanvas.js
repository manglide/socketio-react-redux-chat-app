import React from 'react';
import '../assets/css/App.css';

import MessageForm from './MessageForm'

function MessagesDisplayCanvas() {
  return (
    <div>
      <div className="messageCanvas">
        <ul id="messages"></ul>
      </div>
      <div className="bottomCanvas">
        <MessageForm />
      </div>
    </div>
  );
}

export default MessagesDisplayCanvas;
