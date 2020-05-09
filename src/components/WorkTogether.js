import React from "react";
import "../sass/style.scss";
import ScrollAnimation from "react-animate-on-scroll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactPage = () => (
  <>
    <Row>
      <Col>
        <div className=" App layout-worktogether">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
              Let’s work together on your next project!
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <a href="mailto:hirafareedkapadia@gmail.com">
              hirafareedkapadia@gmail.com
            </a>
          </ScrollAnimation>
        </div>
      </Col>
    </Row>
  </>
);

export default ContactPage;
