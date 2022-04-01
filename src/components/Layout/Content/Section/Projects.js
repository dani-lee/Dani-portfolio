import classes from "./Projects.module.css";
import Fade from "react-reveal";

import agoImage from "../../../../asset/ago.png";
import todoImage from "../../../../asset/todolist.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <Fade bottom>
        <p className={classes["section-heading"]}>Projects</p>
      </Fade>
      <div className={classes["project-wrapper"]}>
        <ul>
          <Fade bottom>
            <li>
              <div className={classes["project-image"]}>
                <img src={agoImage} alt="projectImage" />
              </div>
              <div className={classes["project-content"]}>
                <p className={classes["project-title"]}>
                  AGO(Learning Management System)
                </p>
                <div className={classes["project-info"]}>
                  <p>
                    It was the final project from the courses.
                    <br />
                    I was a project leader of the team.
                    <br />A web site for the company to educate their employees.
                    Regist online courses, submit a report very easily. Write a
                    post, notices.
                  </p>
                  <div className={classes["project-skill"]}>
                    <ul>
                      <li>Java</li>
                      <li>Spring</li>
                      <li>JavaScript</li>
                      <li>Mybatis</li>
                      <li>Oracle</li>
                      <li>bootstrap</li>
                    </ul>
                  </div>
                  <a href="https://github.com/dani-lee/AGO_LMS" target="_blank">
                    <div className={classes["git-icon"]}>
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </Fade>
          <Fade bottom>
            <li>
              <div className={classes["project-image"]}>
                <img src={todoImage} alt="projectImage" />
              </div>
              <div className={classes["project-content"]}>
                <p className={classes["project-title"]}>Todo-list</p>
                <div className={classes["project-info"]}>
                  <p>It is the simpliest react app.</p>
                  <div className={classes["project-skill"]}>
                    <ul>
                      <li>React</li>
                      <li>firebase</li>
                    </ul>
                  </div>
                  <a
                    href="https://github.com/dani-lee/react-todo-list"
                    target="_blank"
                  >
                    <div className={classes["git-icon"]}>
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </Fade>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
