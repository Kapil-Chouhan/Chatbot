class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    
    const lowercase = message.toLowerCase();
    
    if (
      lowercase.includes("joke") ||
      lowercase.includes("yes") ||
      lowercase.includes("another")
    ) {
      this.actionProvider.jokeHandler();
      setTimeout(() => { this.actionProvider.anotherJoke(); }, 3500);
    }
      
    if (
      !lowercase.includes("joke") &&
      !lowercase.includes("yes") &&
      !lowercase.includes("another") &&
      !lowercase.includes("no") &&
      !lowercase.includes("stop")
    ) {
      this.actionProvider.noJokes();
    }

    if (
      lowercase.includes("no") ||
      lowercase.includes("stop")
    ) {
      this.actionProvider.stopJokes();
    }
        
    }

      
}

export default MessageParser;
