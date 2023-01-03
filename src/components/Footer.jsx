import React from "react";
import "../components/Footer.module.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="contact" id="contact">
        <h2>Contact me</h2>
        <form>
          <div className="form-group">
            <label for="name">Your name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label for="email">Your email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label for="message">Message to me</label>
            <textArea name="message" id="message"></textArea>
          </div>
          <button className="hoverable" type="submit">
            Send message
          </button>
        </form>
        <div>
          <p className="copyright">Copyright &copy; 2022</p>
        </div>
        <button className="btn hoverable" id="backToTop">
          Back to Top
          <i className="fa-solid fa-arrow-up fa-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Footer;
