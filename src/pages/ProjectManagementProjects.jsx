import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../styles/ProjectManagementProjects.module.scss";

const ProjectManagementProjects = () => {
  const [pmProjects, setPmProjects] = useState([]);

  const onPdfClick = (externalURL) => {
    let url = externalURL;

    // Check if external starts with 'http://' or 'https://'
    if (!/^https?:\/\//i.test(externalURL)) {
      // It's a local file name; construct the local URL
      url = `/pdf/${externalURL}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    axios
      .get("https://eyvaz-alishov-default-rtdb.firebaseio.com/projects.json")
      .then((response) => {
        console.log("Response data:", response.data);

        const allProjects = Object.values(response.data);
        const projectManagementProjects = allProjects.filter(
          (project) => project.category === "project-management"
        );
        setPmProjects(projectManagementProjects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className={classes.pmProjects}>
      <h2>Managed Projects or Projects I Was Involved Closely</h2>
      <table className={classes.projectsTable}>
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Description</th>
            <th>Role</th>
            <th>Date</th>
            <th>Budget</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pmProjects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.role}</td>
              <td>{project.date}</td>
              <td>{project.budget}</td>
              <td>
                {project.external !== "" ? (
                  <p
                    onClick={() => onPdfClick(project.external)}
                    className={classes.actionButton}
                  >
                    View
                  </p>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectManagementProjects;
