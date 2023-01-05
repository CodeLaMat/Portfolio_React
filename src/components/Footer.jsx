import React from "react";
import { ExternalLink } from "react-external-link";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <hr className={classes.line1} />
      <div className={classes.footer}>
        {" "}
        <div className={classes.contact_header}>
          <h2>Contact me</h2>{" "}
        </div>
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
        <MDBFooter className="text-center text-white">
          <MDBContainer className="pt-4">
            <section className="mb-4">
              <ExternalLink
                to
                href="https://discordapp.com/users/1005587528428044400"
              >
                <FaDiscord className={classes.icons} size="100%" />
              </ExternalLink>

              <ExternalLink to href="https://www.instagram.com/diplomat_111/">
                <FaInstagram className={classes.icons} size="100%" />
              </ExternalLink>
              <ExternalLink
                to
                href="https://www.linkedin.com/in/eyvaz-alishov-54361054/"
              >
                <FaLinkedin className={classes.icons} size="100%" />
              </ExternalLink>
              <ExternalLink to href="https://github.com/CodeLaMat">
                <FaGithub className={classes.icons} size="100%" />
              </ExternalLink>
              <ExternalLink to href="https://www.facebook.com/eyvaz.alishov">
                <FaFacebook className={classes.icons} size="100%" />
              </ExternalLink>
            </section>
          </MDBContainer>
          <div className={classes.copyright}>
            © 2022 Copyright: Eyvaz Alishov
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Footer;
