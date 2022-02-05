import React from "react";
import validateInfo from "../../utils/helper";
// import { useState } from "react";
import useForm from "../useContactForm";

const Contact = () => {
  const { handleInputChange,status, values, handleFormSubmit, errors } =
    useForm(validateInfo);



  return (
    <div id="contact">
      <form  className="form" onSubmit={handleFormSubmit}>
        <h1>Want to Connect?</h1>
        <h3 className="contactText">
          Feel free to contact me at{" "}
          <a href="mailto:krcano2001@gmail.com">krcano2001@gmail.com</a> or fill
          out the form below to reach out
        </h3>
        <label className="label">Name:</label>
        <input
          className="input"
          name="name"
          type="text"
          onChange={handleInputChange}
          value={values.name}
          placeholder="Please enter your name"
        />
        {errors.name && <p className="errorText">{errors.name}</p>}
        <label className="label">Email Address:</label>
        <input
          className="input"
          type="text"
          name="email"
          onChange={handleInputChange}
          placeholder="Please enter your email"
          value={values.email}
        />
        {errors.email && <p className="errorText">{errors.email}</p>}
        <label className="label">Message:</label>
        <textarea
          className="input"
          onChange={handleInputChange}
          name="message"
          placeholder=" Please write a brief message"
          value={values.message}
        />
        {errors.message && <p className="errorText">{errors.message}</p>}
        <button
          className="button"
          type="submit"
         
        >
          {status}
        </button>
      </form>
    </div>
  );
};

export default Contact;
