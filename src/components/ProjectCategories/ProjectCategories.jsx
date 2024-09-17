import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProjectCategories.module.scss";

const ProjectCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.categories}>
      <div
        className={classes.category}
        onClick={() => handleCategoryClick("/projects/project-management")}
      >
        <h3>Managed Projects</h3>
        <p>Explore my projects as a Project Manager.</p>
      </div>
      <div
        className={classes.category}
        onClick={() => handleCategoryClick("/projects/full-stack")}
      >
        <h3>Software Projects</h3>
        <p>Explore my projects as a Full Stack Developer.</p>
      </div>
    </div>
  );
};

export default ProjectCategories;
