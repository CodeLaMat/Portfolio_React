import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Projects.module.scss";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/projects")
      .then((response) => setProjects(response.data));
  }, []);

  console.log(projects);

  return (
    <div className={classes.projects}>
      <div>Projects</div>
      <div className={classes.projects_container}>
        {projects &&
          projects.map((project) => (
            <ProjectCard
              projects={projects}
              key={project.id}
              id={project.id}
              title={project.title}
              github={project.github}
              external={project.external}
              date={project.date}
              techs={project.techs}
              company={project.company}
              showInProjects={project.showInProjects}
              description={project.description}
            ></ProjectCard>
          ))}
      </div>
    </div>
  );
};

export default Projects;
