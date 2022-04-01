import classes from "./Content.module.css";
import Intro from "../Content/Section/Intro";
import About from "../Content/Section/About";
import Projects from "../Content/Section/Projects";
import Contact from "../Content/Section/Contact";

const Content = () => {
  return (
    <div className={classes.content}>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;
