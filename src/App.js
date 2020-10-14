import React from 'react';
import Chatbot from 'react-chatbot-kit';
import Info from './info.js';
import Contact from './contact.js';

import config from './botparts/config.js';
import MessageParser from './botparts/MessageParser.js';
import ActionProvider from './botparts/ActionProvider.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="info"><Info /></div>
      <div className= "chatbot">
      <Chatbot 
        config = {config}
        messageParser = {MessageParser}
        actionProvider = {ActionProvider}
      />
      </div>
      <div className="contact"><Contact /></div>
    </div>
  );
}

export default App;
