import React from "react";
// import { validateEmail, checkPassword } from "../utils/helper";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (name) {
      setName(inputValue);
    } else if (email) {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      // !validateEmail(email) ||
     !email || !name || !message) {
      setErrorMessage("Please fill in the missing field");
      
      return;
    }
    // if (!name) {
    //   setErrorMessage("Please type in your name");
      
    // }

    // if (!message) {
    //   setErrorMessage("Please type in a brief message");
    //   return;
    // }
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
    <form id="contact" className="form">
      <h1>Want to Connect?</h1>
      <h3 className="contactText">Feel free to contact me at <a href="mailto:krcano2001@gmail.com">krcano2001@gmail.com</a> if you would like to build something together or if you have any questions</h3>
      <label className="label">Name:</label>
      <input
        className="input"
        type="text"
        onChange={handleInput}
        
        // placeholder="Add your name"
      ></input>
      <label className="label">Email Address:</label>
      <input
        className="input"
        type="email"
        onChange={handleInput}
        // placeholder="Add your email"
        
      ></input>
      <label className="label">Message:</label>
      <textarea
        className="input"
        onChange={handleInput}
        // placeholder="Write your message"
        
      ></textarea>
      <button className="button" onClick={handleFormSubmit}>Submit</button>
    </form>
     {errorMessage &&  (
      <div>
        <p className="errorText">{errorMessage}</p>
      </div>
    )  }
    </div>
  );
};

export default Contact;
