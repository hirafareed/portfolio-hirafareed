import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../sass/style.scss";
// import { Link } from "react-router-dom";
// import Copyright from "../images/copyrights.svg";

const Footer = () => (
  <>
    <div
      id="main"
      className="clear-top footer flex-column-reverse large-container"
    >
      {/* full footer row */}
      <Row className="footer-margin flex-row-reverse ">
        <Col
          xl={4}
          lg={4}
          md={4}
          className="footer-social d-lg-flex  d-xl-flex  d-md-flex footer-links justify-content-center"
        >
          <p className="footer-designer d-sm-block d-xs-block   d-xl-none d-lg-none d-md-none">
            {" "}
            I'm a designer -––
          </p>
          <a
            target="a_blnk"
            href="https://www.behance.net/hirafareed"
            className="footer-link d-sm-block d-xs-block "
          >
            Behance
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/in/hira-fareed"
            className="footer-link d-sm-block d-xs-block "
          >
            LinkedIn
          </a>

          <a
            target="blank"
            href="https://dribbble.com/hirafareed"
            className="footer-link d-sm-block d-xs-block"
          >
            Dribbble
          </a>
        </Col>

        <Col
          xl={5}
          lg={5}
          md={5}
          className="d-lg-flex  d-xl-flex  footer-middle justify-content-center"
        >
          <a href className="footer-coded d-sm-none d-xs-none d-lg-block  d-xl-block d-md-block">
            Coded without coffee by Hira Fareed
          </a>

          <p className="footer-designer d-sm-block d-xs-block  d-lg-none d-xl-none d-md-none">
            {" "}
            I'm a millennial -––
          </p>
          <a
            className="footer-instagram d-lg-none d-xl-none d-md-none d-sm-block  d-xs-block"
            target="blank"
            href="https://www.instagram.com/hira.designs/"
          >
            <p className="footer-social-insta">Instagram</p>
          </a>
        </Col>
        <Col xl={3} lg={3} md={3} className="footer-copyrights ">
          <p className="copyrights-text">© 2020 Hira Fareed</p>
        </Col>
      </Row>
    </div>

    {/* <footer class="footer"></footer> */}
  </>
);

export default Footer;
