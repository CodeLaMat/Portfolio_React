import React from "react";
import myImage from "../assets/photos/DSCF2387.png";

import classes from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={classes.aboutMe}>
      <div>
        {" "}
        <h2>About Me</h2>
        <p>
          I'm an aspiring junior full-stack software developer with a solid
          background in project management and public administration. I'm
          currently enrolled in the{" "}
          <span>
            Full Stack Web Developer program at Helsinki Business College
          </span>{" "}
          and will be graduating by the end of this year. In addition to my
          academic pursuits, I'm gaining hands-on experience in the field as I
          work as a full-stack web developer intern at Kyky Today in Helsinki.
        </p>
        <p>
          My experience spans a range of languages and frameworks, including{" "}
          <span>
            HTML, CSS/SCSS, TypeScript, JavaScript, Node.js (Morgan & Express),
            React (Redux SMT, Axios, Bootstrap, MUI), Docker, Jest, MongoDB,
            Firebase, Git version control, AWS (EC2, CodeCommit), CI/CD
            (Jenkins), UI/UX, and Adobe Creative Suite (Illustrator, Photoshop)
          </span>
          . I've actively contributed to web application projects showcasing my
          proficiency in these areas.
        </p>
        <p>
          In my previous team projects, I've gained valuable experience working
          within an <span>Agile</span> environment. This experience has
          emphasized the importance of teamwork, effective communication, and
          adaptability. I've also utilized collaboration tools like{" "}
          <span>Figma</span>, <span>Trello</span>, and <span>Jira</span> to
          streamline project management and enhance collaboration with my team.
        </p>
      </div>
      <div className={classes.imageAboutme}>
        <div className={classes.imageWrapper}>
          <img className={classes.imgMe} src={myImage} alt="eyvaz.alishov" />
        </div>
      </div>
    </div>
  );
};

export default About;
