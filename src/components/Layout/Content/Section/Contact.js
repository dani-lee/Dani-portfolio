import Fade from "react-reveal";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes["contact-wrapper"]}>
        <Fade up duration={2000}>
          <p className={classes["section-heading"]}>Send me a message!</p>
        </Fade>
        <Fade up>
          <p className={classes["contact-text"]}>
            Thanks for your interest in getting in touch.
            <br />
            Dropping a line to say hello👋🏻,
            <br />
            ask for my resume or see if we can build something amazing together?
            <br />
            I’d love to hear from you!
          </p>
        </Fade>

        <Fade up>
          <div className={classes.bump}>
            <a
              className={classes.hello}
              href="mailto:ldb1213@gmail.com"
              target="_blank"
            >
              Say Hello 👋🏻
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
