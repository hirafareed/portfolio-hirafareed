import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../sass/style.scss";
import { Link } from "react-router-dom";
import Copyright from "../images/copyrights.svg";

const Footer = () => (
  <>
    <div id="wrap">
      <div id="main" className="App clear-top footer flex-column-reverse">
        {/* full footer row */}
        <Row className="footer-margin flex-row-reverse">
          <Col
            lg={5}
            className="d-lg-flex  d-xl-flex footer-links justify-content-center"
          >
            <p className="footer-designer d-sm-block d-xs-block  d-lg-none d-xl-none">
              {" "}
              I'm a designer -––
            </p>
            <a
              target="a_blnk"
              href="https://www.behance.net/hirafareed"
              className="footer-link d-sm-block d-xs-block"
            >
              Behance
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/hira-fareed"
              className="footer-link d-sm-block d-xs-block"
            >
              LinkedIn
            </a>

            <a
              target="_blank"
              href="https://dribbble.com/hirafareed"
              className="footer-link d-sm-block"
            >
              Dribbble
            </a>
          </Col>

          <Col
            lg={4}
            className="d-lg-flex  d-xl-flex  footer-email justify-content-center"
          >
            <a className="d-sm-none d-xs-none d-lg-block  d-xl-block">
              Designed &amp; Coded without coffee by Hira Fareed
            </a>

            <p className="footer-designer d-sm-block d-xs-block  d-lg-none d-xl-none">
              {" "}
              I'm a millennial -––
            </p>
            <a
              className="footer-instagram d-lg-none d-xl-none d-sm-block  d-xs-block"
              target="_blank"
              href="https://www.instagram.com/hira.designs/"
            >
              Instagram
            </a>
          </Col>
          <Col lg={3} className="footer-copyrights ">
            <p className="copyrights-text">© 2020 All Rights Reserved.</p>
          </Col>
        </Row>
      </div>
    </div>
    <footer class="footer"></footer>
  </>
);

export default Footer;
