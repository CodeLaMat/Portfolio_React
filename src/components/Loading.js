import React from "react";
import classes from "../styles/Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loader}>
        <div className={classes.spinner}></div>
      </div>
      <p className={classes.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;
