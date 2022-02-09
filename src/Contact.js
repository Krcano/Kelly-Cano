import React from "react";
// import validateInfo from "../../utils/helper";
// import { useState } from "react";
// import useForm from "../useContactForm";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // const { handleInputChange,status, values, handleFormSubmit, errors } =
  // useForm(validateInfo);

  const [state, handleSubmit] = useForm("contactMe");
  if (state.succeeded) {
    return <h1 className="formSuccess">Message Sent, thanks!</h1>;
  }
  return (
    <div id="contact">
      <form className="form" onSubmit={handleSubmit}>
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
          // onChange={handleInputChange}
          // value={values.name}

          placeholder="Please enter your name"
        />
        {/* {errors.name && <p className="errorText">{errors.name}</p>} */}
        <label className="label">Email Address:</label>
        <input
          className="input"
          type="text"
          name="email"
          // onChange={handleInputChange}
          placeholder="Please enter your email"
          // value={values.email}
        ></input>
        <ValidationError field="email"  prefix ="Email" errors={state.errors} />

        {/* {errors.email && <p className="errorText">{errors.email}</p>} */}
        <label className="label">Message:</label>
        <textarea
          className="input"
          // onChange={handleInputChange}
          name="message"

          placeholder=" Please write a brief message"
          // value={values.message}
        ></textarea>
        <ValidationError field="message" prefix="Message" errors={state.errors} />

        {/* {errors.message && <p className="errorText">{errors.message}</p>} */}
        <button className="button" type="submit">
          Submit {/* {status} */}
        </button>
        {/* <ValidationError errors={state.errors} /> */}
      </form>
    </div>
  );
};

export default Contact;
