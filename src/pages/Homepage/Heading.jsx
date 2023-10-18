import React from "react";
import classes from "../../styles/Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      {" "}
      <div className={classes.heading_container}>
        <h1 className={classes.welcomeText}>
          {" "}
          👋 Hello there! I'm Eyvaz Alishov
        </h1>
        <h2 className={classes.welcomeMessage}>
          I'm a junior Full Stack Software Developer
        </h2>

        <p className={classes.student}>
          I'm 'passionate about crafting engaging and user-friendly web
          experiences. My toolbox includes expertise in React, Node.js,
          TypeScript, and JavaScript, which I constantly expand to stay at the
          forefront of web development. This portfolio is a showcase of my
          projects and skills. I'm always eager for feedback, suggestions, and
          collaborations to enhance my growth as a developer. Let's connect and
          create amazing web solutions together! You can reach out using the
          contact button or find me on other channels listed below. Thank you
          for visiting, and I look forward to connecting with you!
        </p>
        <div>
          <a href="/contact" role="button">
            <button type="button" className={classes.contact_button}>
              Contact me here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heading;
