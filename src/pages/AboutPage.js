import React from "react";
import "../sass/style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../images/arrow.svg";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const AboutPage = () => (
  <>
    <div className="large-container layout-about">
      <div className="my-container">
        <Row>
          <Col>
            {/* about me */}
            <div className="subheading">
              <ScrollAnimation animateIn="fadeLeft">
                <hr className="line-about" />
                <h6 className="about-sub ">About</h6>
              </ScrollAnimation>
            </div>
            <br></br>
          </Col>
        </Row>

        {/* about-info */}
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
              <h1 className="text-primary">
                I’m a User Experience <br></br> Designer based in Toronto.
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ offset: 3 }}
              xl={{ offset: 3 }}
              md={{ offset: 3 }}
              className="about-body"
            >
              <p>
                I recently graduated from the Interactive Multimedia Management
                Program at Sheridan College. Previously I also obtained a
                Bachelor of Communication Design from the Indus Valley School of
                Art and Architecture. <br></br>I enjoy working on projects that
                require both strategy as well as visual design. I love working
                on problems from the ideation stage and seeing them through
                completion through pixel-perfect designs.
              </p>
            </Col>
          </Row>
        </div>

        {/* experience */}
        <Row>
          <Col lg={{ offset: 3 }} xl={{ offset: 3 }} md={{ offset: 3 }}>
            <hr className="line-experience" />
            <h6 className="experience-sub"> Experience </h6>
          </Col>
        </Row>

        <Row>
          <Col lg={{ offset: 3 }} xl={{ offset: 3 }} md={{ offset: 3 }}>
            <div className="experienceContent ">
              {/* experience 1 */}
              <Accordion>
                <Row className="firstexp  ">
                  <Col
                    xl={{ span: 3, order: 1 }}
                    lg={{ span: 3, order: 1 }}
                    md={{ span: 3, order: 1 }}
                    sm={{ span: 6, order: 1 }}
                    xs={{ span: 6, order: 1 }}
                  >
                    <p className="position "> Freelance Designer </p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 2 }}
                    lg={{ span: 3, order: 2 }}
                    md={{ span: 3, order: 2 }}
                    sm={{ span: 6, order: 3 }}
                    xs={{ span: 6, order: 3 }}
                  >
                    <p className="company align-middle ">Freelance</p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 3 }}
                    lg={{ span: 3, order: 3 }}
                    md={{ span: 3, order: 3 }}
                    sm={{ span: 6, order: 2 }}
                    xs={{ span: 6, order: 2 }}
                  >
                    <p className="year d-xl-flex justify-content-xl-start d-sm-flex justify-content-sm-center ">
                      {" "}
                      Jan 2018 - Present{" "}
                    </p>
                  </Col>

                  <Col
                    className="d-flex justify-content-center "
                    xl={{ span: 3, order: 4 }}
                    lg={{ span: 3, order: 4 }}
                    md={{ span: 3, order: 4 }}
                    sm={{ span: 6, order: 4 }}
                    xs={{ span: 6, order: 4 }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <img
                        className="more-image align-top"
                        src={Arrow}
                        alt="more"
                      />
                    </Accordion.Toggle>
                  </Col>
                </Row>

                <hr className="eachexperience-line"></hr>

                <Accordion.Collapse eventKey="0">
                  <Row className="eachExperience">
                    <Col className="experienceOneBullets">
                      <ul>
                        <li>
                          <h6>Shopify:</h6> Part of the team of designers for
                          Unite conference by Shopify.
                        </li>
                        <li>
                          <h6>Ceridian:</h6> Four month contract with Ceridian
                          as part of their design team to work on digital and
                          print design.
                        </li>
                        <li>
                          <h6>Colliers:</h6> Onsite project to design a report
                          with Colliers.
                        </li>
                        <li>
                          <h6>Barrett and Welsh:</h6> Worked for various clients
                          including Pepsi, TD, and Brampton Transit.
                        </li>
                        <li>
                          <h6>SpinMaster:</h6> Worked on the tags for their
                          brand called “Gund” along with some assets for digital
                          screens.{" "}
                        </li>
                        <p>
                          Also worked with various other companies including
                          Ontario Medical Association, Moneris and Greeniche{" "}
                        </p>
                      </ul>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>

              {/* experience 2 */}
              <Accordion>
                <Row className="firstexp ">
                  <Col
                    xl={{ span: 3, order: 1 }}
                    lg={{ span: 3, order: 1 }}
                    md={{ span: 3, order: 1 }}
                    sm={{ span: 6, order: 1 }}
                    xs={{ span: 6, order: 1 }}
                  >
                    <p className="position"> Creative Designer </p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 2 }}
                    lg={{ span: 3, order: 2 }}
                    md={{ span: 3, order: 2 }}
                    sm={{ span: 6, order: 3 }}
                    xs={{ span: 6, order: 3 }}
                  >
                    <p className="company"> EDGE, Sheridan</p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 3 }}
                    lg={{ span: 3, order: 3 }}
                    md={{ span: 3, order: 3 }}
                    sm={{ span: 6, order: 2 }}
                    xs={{ span: 6, order: 2 }}
                  >
                    <p className="year d-xl-flex justify-content-xl-start d-sm-flex justify-content-sm-center ">
                      {" "}
                      Sept 2019 - Present{" "}
                    </p>
                  </Col>
                  <Col
                    className="d-flex justify-content-center"
                    xl={{ span: 3, order: 4 }}
                    lg={{ span: 3, order: 4 }}
                    md={{ span: 3, order: 4 }}
                    sm={{ span: 6, order: 4 }}
                    xs={{ span: 6, order: 4 }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <img
                        className="more-image align-top"
                        src={Arrow}
                        alt="more"
                      />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <hr className="eachexperience-line"></hr>

                <Accordion.Collapse eventKey="1">
                  <Row className="eachExperience">
                    <Col>
                      <p>
                        At EDGE, I help them with their brand identity for their
                        social media and print design. I also help startups at
                        the EDGE with their branding, posters etc.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>

              {/* experience 3 */}
              <Accordion>
                <Row className="firstexp ">
                  <Col
                    xl={{ span: 3, order: 1 }}
                    lg={{ span: 3, order: 1 }}
                    md={{ span: 3, order: 1 }}
                    sm={{ span: 6, order: 1 }}
                    xs={{ span: 6, order: 1 }}
                  >
                    <p className="position"> Creative Associate </p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 2 }}
                    lg={{ span: 3, order: 2 }}
                    md={{ span: 3, order: 2 }}
                    sm={{ span: 6, order: 3 }}
                    xs={{ span: 6, order: 3 }}
                  >
                    <p className="company"> The Nest I/O </p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 3 }}
                    lg={{ span: 3, order: 3 }}
                    md={{ span: 3, order: 3 }}
                    sm={{ span: 6, order: 2 }}
                    xs={{ span: 6, order: 2 }}
                  >
                    <p className="year d-xl-flex justify-content-xl-start d-sm-flex justify-content-sm-center ">
                      Sept 2016 - Nov 2017{" "}
                    </p>
                  </Col>
                  <Col
                    className="d-flex justify-content-center"
                    xl={{ span: 3, order: 4 }}
                    lg={{ span: 3, order: 4 }}
                    md={{ span: 3, order: 4 }}
                    sm={{ span: 6, order: 4 }}
                    xs={{ span: 6, order: 4 }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      <img
                        className="more-image align-top"
                        src={Arrow}
                        alt="more"
                      />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <hr className="eachexperience-line"></hr>

                <Accordion.Collapse eventKey="2">
                  <Row className="eachExperience">
                    <Col>
                      <p>
                        I was responsible for the design outlook of The Nest I/o
                        and P@sha which included social media, website design,
                        collateral design, as well as helping set up events.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>

              <Accordion>
                {/* experience 3 */}
                <Row className="firstexp ">
                  <Col
                    xl={{ span: 3, order: 1 }}
                    lg={{ span: 3, order: 1 }}
                    md={{ span: 3, order: 1 }}
                    sm={{ span: 6, order: 1 }}
                    xs={{ span: 6, order: 1 }}
                  >
                    <p className="position"> Graphic Designer </p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 2 }}
                    lg={{ span: 3, order: 2 }}
                    md={{ span: 3, order: 2 }}
                    sm={{ span: 6, order: 3 }}
                    xs={{ span: 6, order: 3 }}
                  >
                    <p className="company"> Express Tribune</p>
                  </Col>
                  <Col
                    xl={{ span: 3, order: 3 }}
                    lg={{ span: 3, order: 3 }}
                    md={{ span: 3, order: 3 }}
                    sm={{ span: 6, order: 2 }}
                    xs={{ span: 6, order: 3 }}
                  >
                    <p className="year d-xl-flex justify-content-xl-start d-sm-flex justify-content-sm-center ">
                      {" "}
                      Feb 2015 - Aug 2016{" "}
                    </p>
                  </Col>
                  <Col
                    className="d-flex justify-content-center"
                    xl={{ span: 3, order: 4 }}
                    lg={{ span: 3, order: 4 }}
                    md={{ span: 3, order: 4 }}
                    sm={{ span: 6, order: 4 }}
                    xs={{ span: 6, order: 4 }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      <img
                        className="more-image align-top"
                        src={Arrow}
                        alt="more"
                      />
                    </Accordion.Toggle>
                  </Col>
                </Row>

                <Accordion.Collapse eventKey="3">
                  <Row className="eachExperience">
                    <Col>
                      <hr></hr>
                      <p>
                        Responsibilities included working on the graphics for
                        daily newspaper and weekly magazines using InDesign.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </Col>
        </Row>
        {/* end of experience */}

        {/* start of education */}

        <div class="fulleducation"></div>
        <Row>
          <Col lg={{ offset: 3 }} xl={{ offset: 3 }} md={{ offset: 3 }}>
            <hr className="line-education" />
            <h6 className="education-sub"> Education </h6>
          </Col>
        </Row>

        {/* education info */}
        <Row className="fulleducation-info">
          <Col lg={{ offset: 3 }} xl={{ offset: 3 }} md={{ offset: 3 }}>
            <Row>
              <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                <p className="degree">
                  Post-Graduate in Interactive Media Management
                </p>
              </Col>
              <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                <p className="year">2019 - 2020 </p>
              </Col>
            </Row>

            <p className="school">Sheridan College</p>
            <div className="education-two">
              <Row>
                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                  <p className="degree">Bachelors in Communication Design</p>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                  <p className="year">2011 - 2014 </p>
                </Col>
              </Row>
              <p className="school">
                Indus valley School of Art and Architecture
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <Row className="skills-bg">
      <div className="large-container">
        <Row className="skills-inside">
          {/* column for design and programming*/}
          <Col xl={6} lg={6}>
            <Row>
              <Col>
                <h6 className="skills-design">Design</h6>
                <p>
                  Wireframing, Prototyping, User Testing, Data Visualization,
                  Typography, Illustrations, Animation, Branding &amp; Visual
                  Identity
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="skills-programming">Programming</h6>
                <p>
                  HTML &amp; CSS, JavaScript, React.js, Node.js, PHP, MySQL,
                  Zim.js
                </p>
              </Col>
            </Row>
          </Col>
          {/* column for tools*/}

          <Col xl={{ span: 3, offset: 2 }}>
            <Row>
              <Col>
                <h6 className="skills-tools">Tools</h6>
                <p>
                  Figma, <br></br>Sketch,<br></br> InVision,<br></br> WordPress,{" "}
                  <br></br> Adobe Creative Suite,<br></br> Pen + Paper<br></br>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  </>
);

export default AboutPage;
