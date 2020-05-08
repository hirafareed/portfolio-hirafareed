import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./MobileMenu.scss";

export default ({ close }) => {
  return (
    <>
      {/* It will be visible on mobile screens */}
      <div className="d-block">
        <div className="ml-auto popup-menu">
          <Link className="nav-item nav-link popup-link" to="/">
            <h1
              onClick={() => {
                close();
              }}
            >
              Work
            </h1>
          </Link>

          <Link className="nav-item nav-link popup-link" to="/about">
            <h1
              onClick={() => {
                close();
              }}
            >
              About
            </h1>
          </Link>

          <Link className="nav-item nav-link popup-link" to="/contact">
            <h1
              onClick={() => {
                close();
              }}
            >
              Contact
            </h1>
          </Link>

          <div className="social-links">
            <a
              target="a_blnk"
              href="https://www.behance.net/hirafareed"
              className="d-sm-block d-xs-block"
            >
              Behance
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/hira-fareed"
              className="d-sm-block d-xs-block"
            >
              LinkedIn
            </a>

            <a
              target="_blank"
              href="https://dribbble.com/hirafareed"
              className="d-sm-block"
            >
              Dribble
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
