import React from "react";
import classes from "../../styles/Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.heading_container}>
        <h1 className={classes.welcomeText}>
          👋 Hello there! I'm Eyvaz Alishov
        </h1>
        <h2 className={classes.welcomeMessage}>
          ICT Project Manager & Full Stack Software Developer
        </h2>

        <p className={classes.description}>
          I am an ICT professional specializing in both software development and
          project management. With extensive experience leading cross-functional
          teams and developing user-centric applications, I am passionate about
          creating innovative solutions that align with business goals. My
          toolbox includes expertise in React, Node.js, TypeScript, and
          JavaScript, which I leverage to stay at the forefront of technology.
          This portfolio showcases my projects and the impact they've made. I'm
          always eager for feedback, collaborations, and opportunities to
          contribute to meaningful projects. Let's connect and create impactful
          digital solutions together! Feel free to reach out using the contact
          button below. Thank you for visiting, and I look forward to connecting
          with you!
        </p>
        <div>
          <a href="/contact" role="button">
            <button type="button" className={classes.contact_button}>
              Contact Me Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heading;
