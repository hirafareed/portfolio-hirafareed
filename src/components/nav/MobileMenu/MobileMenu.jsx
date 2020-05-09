import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./MobileMenu.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ({ close }) => {
  return (
    <>
      {/* It will be visible on mobile screens */}
      <div className="large-container full-popup">
        <Row className="popup-mainlinks ">
          {/* <div className="d-block"> */}
          <div className="">
            <Link className="popup-link" to="/">
              <h1
                onClick={() => {
                  close();
                }}
              >
                Work
              </h1>
            </Link>

            <Link className="popup-link" to="/about">
              <h1
                onClick={() => {
                  close();
                }}
              >
                About
              </h1>
            </Link>

            <Link className="popup-link" to="/contact">
              <h1
                onClick={() => {
                  close();
                }}
              >
                Contact
              </h1>
            </Link>
          </div>
          {/* </div> */}
        </Row>
        <Row className="popup-social-links">
          <Col className="popup-social-links-behance">
            <a
              target="a_blnk"
              href="https://www.behance.net/hirafareed"
              className="d-sm-block d-xs-block"
            >
              Behance
            </a>
          </Col>

          <Col className="popup-social-links-linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hira-fareed"
              className="d-sm-block d-xs-block"
            >
              LinkedIn
            </a>
          </Col>

          <Col className="popup-social-links-dribbble">
            <a
              target="_blank"
              href="https://dribbble.com/hirafareed"
              className="d-sm-block"
            >
              Dribbble
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};
