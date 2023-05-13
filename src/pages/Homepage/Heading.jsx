import React from "react";
import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      {" "}
      <div className={classes.heading_container}>
        <h1 className={classes.welcomeText}>Hi! I'm Eyvaz Alishov</h1>
        <h2 className={classes.welcomeMessage}>
          I'm a student of Full Stack Web Developer program at Business College
          Helsinki
        </h2>

        <p className={classes.student}>
          As a Full Stack Web Developer student, I'm passionate about creating
          engaging and user-friendly web experiences. With expertise in React,
          Node.js, TypeScript, and JavaScript, I constantly expand my skills in
          these frameworks. This portfolio showcases my projects and skills, and
          I welcome feedback, suggestions, and collaborations to enhance my
          growth as a developer. Let's connect to create amazing web solutions
          together! Feel free to reach out using the contact button or other
          channels listed. Thank you for visiting, and I look forward to
          connecting with you!
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
