import React from "react";
const styles = {
  input: {
    padding: "14px 32px 14px 16px",
    borderRadius: "4px",
    border: "2px solid #5d0cff",
    outline: "none",
    width: "320px",
    // background: transparent;}
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    marginBottom: "32px",
    flexDirection: "column",
    // justifyContent:'center'
    marginLeft: " 4em",
    marginRight:'4em'
  },
  button: {
    // border: "none",
    padding: "10px 20px",
    // margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    // textDecoration: "none",
    fontSize: "15px",
    fontFamily: "inherit",
  },
  label:{
    fontWeight:'bold'
  }
};
const Contact = () => {
  return (
    <form id="contact" style={styles.form}>
      <h1>Want to Connect?</h1>
      <label style={styles.label}>Name:</label>
      <input
        style={styles.input}
        type="text"
        // placeholder="Add your name"
      ></input>
      <label style={styles.label}>Email Address:</label>
      <input
        style={styles.input}
        type="text"
        // placeholder="Add your email"
      ></input>
      <label style={styles.label}>Message:</label>
      <textarea
        style={styles.input}
        // placeholder="Write your message"
      ></textarea>
      <button style={styles.button}>Submit</button>
    </form>
  );
};

export default Contact;
