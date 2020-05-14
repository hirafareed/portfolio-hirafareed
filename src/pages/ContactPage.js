import React from "react";
import "../sass/style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollAnimation from "react-animate-on-scroll";

const ContactPage = () => (
  <>
    <div className="App  ">
      <div className="subheading large-container layout-contact">
        <Row>
          <Col>
            {/* contact sub*/}
            <div className="subheading">
              <ScrollAnimation animateIn="fadeLeft">
                <hr className="line-contact" />
                <h6 className="contact-sub ">Contact</h6>
              </ScrollAnimation>
            </div>
            <br></br>
          </Col>
        </Row>

        {/* contact-info */}
        <div className="about-info">
          <Row>
            <Col
              lg={12}
              xl={10}
              md={10}
              mdlg={3}
              sm={10}
              xs={10}
              className="about-main "
            >
              <h1 className="text-primary">Let's Connect</h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ offset: 3 }}
              xl={{ offset: 3 }}
              md={{ offset: 3 }}
              className="about-body"
            >
              <a href="mailto:hirafareedkapadia@gmail.com">
                hirafareedkapadia@gmail.com
              </a>
              <p>
                If you would like to chat or have any questions, I would love to
                hear from you at the email above. Feel free to connect with me
                on social media!
                <p className="contact-cheers">
                  Cheers,<br></br>Hira
                </p>
              </p>
            </Col>
          </Row>
        </div>

        {/* <a href="mailto:hirafareedkapadia@gmail.com">
          hirafareedkapadia@gmail.com
        </a>

        <p>
          If you would like to chat or have any questions, I would love to hear
          from you at the email above. Feel free to connect with me on social
          media!
        </p>
        <p className="contact-cheers">
          Cheers,<br></br>Hira
        </p> */}
      </div>
    </div>
  </>
);

export default ContactPage;
