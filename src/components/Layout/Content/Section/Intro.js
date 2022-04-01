import Fade from "react-reveal";

import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.intro}>
      <div className={classes["text-wrapper"]}>
        <Fade up>
          <h1 className={classes["name_eg"]}>HELLO, I'M DANBI LEE!</h1>
        </Fade>
        <h1>안녕하세요, 이단비입니다.</h1>
      </div>
    </section>
  );
};

export default Intro;
