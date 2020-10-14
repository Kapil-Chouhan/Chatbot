import React from 'react'
import './info.css'

const Info = () => {
  return <div className="info-container">
    <h3 className="info-header">About the chatbot</h3>
    <p className="info-text">
      This JokeBot is a simple joke tellng chatbot.
    </p>
    <p className="info-text">  
      Use is pretty simple and easy just type "tell me a joke" or any other way you want to and it'll tell you one.
    </p>
    <p className="info-text">
      I can't guarantee the funniness of the jokes.
    </p>

  </div>
}

export default Info;