import classes from "./Left.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Left = () => {
  return (
    <div className={classes.left}>
      <ul>
        <li>
          <a href="https://github.com/dani-lee" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github-square" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dani____l/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danbi-lee/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Left;
