import { useState, useEffect } from "react";
import Fade from "react-reveal";

import classes from "./About.module.css";
import meEmoji from "../../../../asset/me.png";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <Fade top>
        <p className={classes["section-heading"]}>About</p>
      </Fade>
      <div className={classes["about-border"]}>
        <Fade bottom>
          <div className={classes["about-content"]}>
            <p>
              <span className={classes["about-name"]}>
                Hello, I’m Danbi, call me Dani!
              </span>
              <br />
              <br />
              I’m passionate about building things for the web. I started my
              journey as a developer a year ago. After I have learned
              self-study, I started the course and finished final project as
              Project Leader.
              <br />
              &nbsp;&nbsp;I’ve discovered my passion for the world of web
              development and the beauty behind building useful websites. I can
              handle difficult situations calmly and can work along with my
              teammates in a very friendly environment. Also, I make sure to
              give my 100% even during my solo projects.
              <br />
              &nbsp;&nbsp;I’m now looking for a junior dev position to finally
              kick start my career and learn among professionals.
              <br />I am always ready to face challenges and get along with
              people very well
            </p>
          </div>
          <div className={classes.skills}>
            <p>#skills</p>
            <div className={classes.skillsList}>
              <ul>
                <li>Java</li>
                <li>JSP</li>
                <li>Spring</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>React</li>
                <li>bootstrap</li>
                <li>PhotoShop</li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
      <img className={classes["me-img"]} src={meEmoji} />
    </section>
  );
};

export default About;
