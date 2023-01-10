import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SideMenu.module.scss";

import Pdf from "../../assets/resume.pdf";

const onResumeClick = () => {
  window.open(Pdf);
};

const RightNav = ({ menuOpen }) => {
  return (
    <ul className={menuOpen ? classes.sideMenu_open : classes.burger_sideMenu}>
      <li>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink>
            <a onClick={onResumeClick}>Resume</a>
          </NavLink>
        </li>
      </li>
    </ul>
  );
};

export default RightNav;
