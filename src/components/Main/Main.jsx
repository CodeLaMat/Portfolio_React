import React, { Component } from "react";
import classes from "./Main.module.scss";
import { Outlet } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <main className={classes.main}>
        <Outlet />
      </main>
    );
  }
}
