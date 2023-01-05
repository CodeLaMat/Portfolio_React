import React from "react";
import myImage from "../assets/photos/DSCF2387.png";

import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.aboutMe}>
      <div>
        {" "}
        <h2>About me</h2>
        <p>
          {" "}
          I'm an aspiring web developer with solid background in project
          management and public administration. As a student of the,{" "}
          <span>
            Full Stack Web Developer programme at Helsinki Business College
          </span>{" "}
          I am gaining a strong foundation in both front-end and back-end web
          development technologies.
        </p>{" "}
        <p>
          I have experience with languages and frameworks such as{" "}
          <span>
            HTML, CSS, JavaScript, Node, React, Typescript, UI/UX and Adobe
            Creative Suite (Illustrator, Photoshop){" "}
          </span>{" "}
          , and have worked on projects involving web application development
          and data analysis.{" "}
        </p>
        <p>
          In my previous team projects, I have gained experience working in an
          <span> Agile </span> environment, where I have learned the importance
          of teamwork, communication, and adaptability. I have also used tools
          such as <span>Figma</span> and <span>Trello</span> to collaborate with
          my team and manage project tasks.
        </p>
      </div>
      <div className={classes.imageAboutme}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.imgMe}
            src={myImage}
            height="20rem"
            alt="My picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
