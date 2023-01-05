import React from "react";
import classes from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.skills}>
        <h2>Skills</h2>
        <div className={classes.skills_inner}>
          <p>
            As an{" "}
            <em>
              <span>entry level software developer </span>
            </em>{" "}
            I am eager to apply my skills and knowledge to real-world projects
            and am looking for opportunities to gain practical experience in the
            field. I am a proactive learner and am always looking for ways to
            improve my skills and stay up-to-date on the latest developments in
            web development. I am excited to contribute my skills and passion to
            a company that values innovation and creativity.
          </p>
          <p>Here are a few I've been working with recently:</p>
        </div>

        <div className={classes.skillsLine}>
          <div className={classes.container}>
            <div className={classes.skills_group}>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-html5"></i>
                <p>HTML5</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 80 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>80%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-css3"></i>
                <p>CSS3</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 70 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>70%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 60 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>60%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-react"></i>
                <p>React</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 60 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>60%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-node-js"></i>
                <p>Node-js</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 40 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>40%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-figma"></i>
                <p>Figma</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 50 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>50%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-trello"></i>
                <p>Trello</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 60 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>60%</span>
                  </div>
                </div>
              </div>

              <div className={classes.skill_box}>
                <i className="fa-brands fa-git"></i>
                <p>Git</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 60 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>60%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-bitbucket"></i>
                <p>Bitbucket</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 60 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>60%</span>
                  </div>
                </div>
              </div>
              <div className={classes.skill_box}>
                <i className="fa-brands fa-uikit"></i>
                <p>UIKit</p>
                <div className={classes.bar_container}>
                  <div className={classes.progressbar_container}>
                    <div
                      className={classes.progressbar_complete}
                      style={{ width: 40 }}
                    >
                      <div className={classes.progressbar_liquid}></div>
                    </div>
                    <span className={classes.skill_barSpan}>40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
