import React from "react";
import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      {" "}
      <div className={classes.heading_container}>
        <h1 className={classes.welcomeText}>Hi! I'm Eyvaz Alishov.</h1>
        <h2 className={classes.welcomeMessage}>
          I'm a student at Full Stack Web Developer program.
        </h2>

        <p className={classes.student}>
          I'm a student at Helsinki Business College at Full Stack Web Developer
          program. I'm trying to create my own portfolio page. Please contribute
          your ideas and experiences to help me on this way. Thanks in advance.
        </p>
        <div>
          <a href="/contact" role="button"></a>
          <button type="button" className={classes.contact_button}>
            Contact me here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
