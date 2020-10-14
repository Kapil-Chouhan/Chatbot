import React from 'react';
import './contact.css';

const Contact = () => {
 return<div className="contact-container">
   <h3 className= "contact-header">Contact</h3>
   <a href= "mailto: contact.kapilchouhan@gmail.com" className= "contact-button mail">
     <img src= "./envelope.png" alt = "mail"/> </a>
   <a href= "https://github.com/Kapil-Chouhan" className= "contact-button github"><img src = "./github.png" alt = "github" /></a>
   <a href="https://www.linkedin.com/in/kapil-chouhan-9921a5138/" className= "contact-button linkedin"><img src = "./linkedin.png" alt = "linkedin" /></a>
 </div>
}

export default Contact;