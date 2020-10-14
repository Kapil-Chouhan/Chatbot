import React, {useEffect, useState} from 'react';

import './jokes.css';

const Jokes = (props) => {

  const [state, setState] = useState([]);
  
  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers : { 
        'Accept': 'application/json'
       }

    })
    .then((res) => res.json())
    .then((data) => {
      const joke = data.joke;
      setState(joke);
    });
  }, []);
  
  const renderJokes = () => {
      return <div>
              <h2>{state}</h2>
            </div>
  };

  return <div>
    {renderJokes()}
  </div>
};

export default Jokes;