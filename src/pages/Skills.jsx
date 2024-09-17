import React from "react";
import classes from "../styles/Skills.module.scss";
import skillsData from "../skillsData";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes.skills_inner}>
        <p>
          As a{" "}
          <em>
            <span>software developer</span>
          </em>
          , I bring a strong foundation in web development and a drive to work
          on impactful projects. I am constantly learning and refining my skills
          to stay current with the latest trends in the industry. My proactive
          approach and passion for technology make me eager to contribute to
          innovative and creative teams.
        </p>
        <p>
          Here are some of the technologies I've been working with recently:
        </p>
      </div>

      <div className={classes.skillsLine}>
        <div className={classes.container}>
          {skillsData.map((categoryData, categoryIndex) => (
            <div key={categoryIndex} className={classes.skills_group}>
              <h3>{categoryData.category}</h3>
              {categoryData.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={classes.skill_box}>
                  <skill.Icon className={classes.icon} />
                  <p>{skill.name}</p>
                  <div className={classes.bar_container}>
                    <div className={classes.progressbar_container}>
                      <div
                        className={classes.progressbar_complete}
                        style={{ width: `${skill.proficiency}%` }}
                      >
                        <div className={classes.progressbar_liquid}></div>
                      </div>
                      <span className={classes.skill_barSpan}>
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
