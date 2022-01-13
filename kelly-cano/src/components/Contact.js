import React from "react";


const Contact = () => {
  return (
    <form id="contact" className="form">
      <h1>Want to Connect?</h1>
      <label className="label" >Name:</label>
      <input
        className="input"
        type="text"
        // placeholder="Add your name"
      ></input>
      <label  className="label" >Email Address:</label>
      <input
         className="input"
        type="text"
        // placeholder="Add your email"
      ></input>
      <label  className="label" >Message:</label>
      <textarea
        className="input"
        // placeholder="Write your message"
      ></textarea>
      <button className="button">Submit</button>
    </form>
  );
};

export default Contact;
