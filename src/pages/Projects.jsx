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

  return (
    <div className={classes.projects}>
      <div>
        <h2>Projects</h2>
      </div>
      <div className={classes.projects_inner}>
        <p>
          I'm excited to share with you some of the projects I've been working
          on. From web development to data structures, I enjoy tackling a wide
          range of challenges and technologies. This page features a selection
          of my most recent and noteworthy projects. I worked on these projects
          as a part of my tasks in Full Stack Web Developer programme at
          Helsinki Business College. Although some of the projects seems to be
          incomplete, the task itself is completed.
        </p>
        <p>
          Click on a project to see more details and learn more about my
          experience and skills. You can check both live links and github links.
        </p>
      </div>
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
