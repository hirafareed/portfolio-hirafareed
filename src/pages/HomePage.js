import React from "react";
import Lottie from "react-lottie";
import animation2 from "../lottie/lot-data.json"; //full
import animation1 from "../lottie/lot-data2.json"; //beginning
import ArticlesListPage from "./ArticlesListPage";
import WorkTogether from "../components/WorkTogether";

import "../sass/style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

// import Footer from "./../components/Footer";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDivClicked: true,
    };
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef();
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  handleOnClick = () => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        inline: "end",
      });
    }
  };
  divHandler() {
    this.setState({
      isDivClicked: false,
    });
  }

  render() {
    return (
      <div className="App ">
        <div className="large-container layout-hero ">
          {/* <div className="my-container"> */}

          <section className=" text-left ">
            {/* <div className="row">
                <div className="subheading col-lg-6">
                  <hr className="line-landing" />
                  <h6 className="intro-sub ">Intro</h6>
                </div>
              </div> */}

            <div className="row">
              <div
                className="lottie-animation "
                style={{ position: "relative" }}
              >
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                  <div
                    className="clickEvent"
                    onClick={this.divHandler.bind(this)}
                  >
                    &nbsp;
                  </div>
                  {this.state.isDivClicked && (
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animation1,
                      }}
                    ></Lottie>
                  )}
                  {!this.state.isDivClicked && (
                    <Lottie
                      options={{
                        loop: false,
                        autoplay: true,
                        animationData: animation2,
                      }}
                    ></Lottie>
                  )}
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">
              <p
                className="intro-info col-xl-8  col-md-10"

                // data-aos-anchor-placement="top-top"
              >
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                  Passionate about creating experiences and products that are
                  meaningful, user driven and delightful.
                </ScrollAnimation>
              </p>
            </div>
            {/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"> */}
            <h2
              className="projects-link"
              onClick={this.handleOnClick}
              style={{ cursor: "pointer" }}
            >
              {" "}
              VIEW PROJECTS
            </h2>
            {/* </ScrollAnimation> */}

            {/* scroll line */}
            {/* <div
                class="scroll-down is-active is-inview"
                scroll-down="home"
                data-controller="opinview"
                op-inview="0, 0.7"
                op-inview-deactivate=""
              >
                <div class="scroll-down__text">
                  <span>scroll</span>
                </div>
                <div class="scroll-down__line"></div>
              </div> */}
          </section>

          <div ref={this.myDivToFocus}>
            <ArticlesListPage />
          </div>
        </div>

        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default HomePage;

//
// col-sm for larger mobile phones (devices with resolutions ≥ 576px);
// col-md for tablets (≥768px);
// col-lg for laptops (≥992px);
// col-xl for desktops (≥1200px)
