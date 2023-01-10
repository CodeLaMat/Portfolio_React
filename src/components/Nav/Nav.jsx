import React from "react";
import classes from "./Nav.module.scss";
import Burger from "./Burger";

export default function Nav() {
  return (
    <div>
      <nav className={classes.nav}>
        <Burger />
      </nav>
    </div>
  );
}
