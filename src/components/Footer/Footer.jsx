import React from "react";
import { ExternalLink } from "react-external-link";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import classes from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <hr className={classes.line1} />
      <div className={classes.footer}>
        {" "}
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
