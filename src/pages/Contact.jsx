import React from "react";
import classes from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className={classes.contacts}>
      <div>
        <h2>Contact</h2>
      </div>
      <div className={classes.contact_container}>
        <div className={classes.media_container}></div>
        <div className={classes.form_container}>
          <div className={classes.form_input}>
            <label htmlFor="name">Your name: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={classes.form_input}>
            <label htmlFor="email">Your email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={classes.form_input}>
            <label htmlFor="message">Your message: </label>
            <textArea name="message" id="message"></textArea>
          </div>
          <button className={classes.footer_button} type="submit">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
