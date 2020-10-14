class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  jokeHandler = () => {
    const message = this.createChatBotMessage("Here's a funny one", {
      widget: "joke",
    });
    this.addMessageToState(message);
  };

  anotherJoke = () => {
    const message = this.createChatBotMessage("Would you like another one?", {
      widget: "another",
    });
    this.addMessageToState(message);
  };

  noJokes = () => {
    const message = this.createChatBotMessage(`Invalid input.`);
    this.addMessageToState(message);
  };

  stopJokes = () => {
    const message = this.createChatBotMessage(`Thankyou for using this Chatbot, it was pun. lol`);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;