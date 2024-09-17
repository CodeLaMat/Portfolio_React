// src/pages/Projects.jsx

import React from "react";
import classes from "../styles/Projects.module.scss";
import ProjectCategories from "../components/ProjectCategories/ProjectCategories";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2>Projects</h2>
      <div className={classes.projects_inner}>
        <p>
          Welcome to my projects page! Here, you can explore my work both as a
          Project Manager and a Full Stack Developer. Click on a category below
          to see more details about my projects.
        </p>
      </div>
      <ProjectCategories />
    </div>
  );
};

export default Projects;
