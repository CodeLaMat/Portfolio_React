import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Logo from "../assets/photos/logoWB.png";
import classes from "../components/Header.module.scss";
import Nav from "./Nav";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 40) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener("scroll", changeClass);

  return (
    <div className={classes.header_container}>
      <header className={scrolling ? classes.header_bg : classes.header}>
        <Link to="/">
          <div className={classes.hoverable} id="header_logo">
            <img src={Logo} className={classes.logo} alt="logo" />
          </div>
        </Link>
        <Nav />{" "}
      </header>
      <div>
        <ul className={classes.socialMedia}>
          <li>
            <ExternalLink
              href="https://discordapp.com/users/1005587528428044400"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/344/discord.png"
                class="fa fa-discord"
                className={classes.social_icons}
                alt="facebookIcon"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.facebook.com/eyvaz.alishov"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/344/facebook-new.png"
                class="fa fa-facebook"
                className={classes.social_icons}
                alt="facebookIcon"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/CodeLaMat" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/344/github.png"
                class="fa fa-github"
                className={classes.social_icons}
                alt="githubIcon"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.instagram.com/diplomat_111/"
              target="_blank"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
                class="fa fa-instagram"
                className={classes.social_icons}
                alt="instagramIcon"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.linkedin.com/in/eyvaz-alishov-54361054/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/344/linkedin-circled.png"
                class="fa fa-linkedin"
                className={classes.social_icons}
                alt="linkedinIcon"
              />
            </ExternalLink>
          </li>
        </ul>
      </div>
      <div className={classes.eMailContainer}>
        <div className={classes.eMail}>
          <a className={classes.emailBox} href="mailto:eyvaz.alishov@gmail.com">
            eyvaz.alishov@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
