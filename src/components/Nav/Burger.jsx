import React, { useState } from "react";
import classes from "./Burger.module.scss";
import SideMenu from "./SideMenu";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={menuOpen ? classes.menu_opened : classes.burger_menu}
      >
        <div className={classes.burger_menu_line1} />
        <div className={classes.burger_menu_line2} />
        <div className={classes.burger_menu_line3} />
      </div>
      <SideMenu menuOpen={menuOpen} />
    </>
  );
};

export default Burger;
