import React from "react";
import classes from "../components/Header.module.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../assets/photos/logoWB.png";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.hoverable} id="header_logo">
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
      </Link>

      <Nav />
    </header>
  );
}
