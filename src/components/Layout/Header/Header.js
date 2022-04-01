import { useState, useEffect } from "react";

import logoImage from "../../../asset/D_logo.png";
import cv from "../../../asset/DANBI_LEE.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [changeHeader, setChangeHeader] = useState(false);
  const [changeCVBtn, setChangeCVBtn] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  useEffect(() => {
    const chageHaderHandler = () => {
      if (position >= 833.125) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }

      if (position >= 3264.375) {
        setChangeCVBtn(true);
      } else {
        setChangeCVBtn(false);
      }
    };
    window.addEventListener("scroll", chageHaderHandler);
    return () => {
      window.removeEventListener("scroll", chageHaderHandler);
    };
  });

  return (
    <header
      className={`${classes.header} ${
        visible ? classes.visible : classes.hidden
      }`}
    >
      <nav className={classes.nav}>
        <div className={classes["nav-logo"]}>
          <a>
            <img src={logoImage} />
          </a>
        </div>
        <div
          className={`${classes["nav-links"]}  ${
            changeHeader ? classes.changedColour : ""
          }`}
        >
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href={cv} target="_blank">
                <button
                  className={`${classes["border-button"]} ${
                    changeCVBtn ? classes["changedColour-button"] : ""
                  }`}
                >
                  CV
                </button>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className={classes["nav__toggleBtn"]}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
