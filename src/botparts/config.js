import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import Joke from './components/jokes/jokes.jsx';

const config = {

  botName: "JokeBot",

  initialMessages: [createChatBotMessage(`Hello, I'm a jokebot.\nWanna hear a joke?`)],

  state: {
    joke: []
  },
  widgets: [
    {
      widgetName: "joke",
      widgetFunc: (props) => <Joke {...props} />,
      mapStateToProps: ["joke"],
    },
  ],
  customComponents: {
   header: () => <div className= "react-chatbot-kit-chat-header">JokeBot</div>
  },
};

export default config;