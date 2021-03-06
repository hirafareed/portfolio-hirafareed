import React, { useEffect, useState } from "react";
import TopSection from "./ArticleTopSection/ArticleTopSection";
import Data from "./../pages/article-content";
import { Link } from "react-router-dom";
import Next from "../images/next.svg";

// import { SccrollView, Dimensions } from "react-native";
// import Video from "react-native-video";
import AnimationVideo from "../images/project-two/countdown.mp4";

// images
import SketchWander from "../images/project-two/wander-sketch.png";
import UserflowWander from "../images/project-two/userflow-wander.svg";
import Sketch2Wander from "../images/project-two/sketch2-wander.svg";
import WanderLogo from "../images/project-two/wander-logo.svg";
import WanderIcons from "../images/project-two/wander-icons.svg";
import WanderColors from "../images/project-two/wander-colors.svg";

export default ({ match }) => {
  const name = match.params.name;

  console.log(name);

  const [setArticleInfo] = useState({ upvotes: 0, comments: [] });

  // const item1 = Data.find((x) => x.id === "01");
  const item2 = Data.find((x) => x.id === "02");
  const item3 = Data.find((x) => x.id === "03");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
      // console.log(body);
    };
    fetchData();
  }, [name,setArticleInfo]);

  return (
    <>
      <TopSection data={item2}></TopSection>
      <div className="article-container">
        <h1 className="project-subhead">Who is Wander for?</h1>
        <p className="wireframe-text ">
          Wander is created for two kinds of users.{" "}
        </p>
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="classWithPad two-audience">
              <h1 className="wireframe-text-big m-0">Fatima (Female, 20)</h1>
              <p className="wireframe-text">
                Fatima is planning to go on a trip to Italy but she doesn’t want
                to carry a physical journal. She wants a way to record her trip.
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  mt-xl-0  mt-lg-0 mt-md-0 mt-3">
            <div className="classWithPad two-audience two-margin-bottom">
              <h1 className="wireframe-text-big m-0">Hafsa (Female, 27)</h1>
              <p className="wireframe-text">
                Hafsa wants to go on a trip for her vacation but she wants some
                inspiration as to where her next vacation should be.
              </p>
            </div>
          </div>
        </div>

        <h1 className="project-subhead mt-5">Designing the prototype </h1>
        <p className="wireframe-text">
          Now that I had a better idea of who I am designing for, I began to
          conceptualize how a system can meet their needs.{" "}
        </p>
        <img
          className="img-fluid image-fitted-formobile two-margin-bottom "
          src={SketchWander}
          alt=""
        />
        <h1 className="project-subhead ">User flow </h1>

        <img
          className="img-fluid image-fitted-formobile two-margin-bottom "
          src={UserflowWander}
          alt=""
        />
      </div>
      {/* visual design text */}
      <div className="article-container">
        <h1 className="project-subhead">Visual Design</h1>
        <p className="wireframe-text">
          Colours, typography and icons that make up Wander
        </p>{" "}
      </div>
      {/* visual design row */}
      <div className=" wander-visualdesign">
        <div className="article-container">
          <div className="row">
            <div className="col-4  col-xl-4 col-lg-4  col-md-4 d-flex justify-content-center">
              <img
                className="img-fluid  two-margin-bottom wander-colors"
                src={WanderColors}
                alt=""
              />
            </div>
            <div className="col-7  col-xl-8 col-lg-8  col-md-8">
              <h1 className="gilroy-heading mt-3">Gilroy</h1>
              <p className="gilroy-text">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
              <img
                className="img-fluid  two-margin-bottom wander-icons"
                src={WanderIcons}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* wander logo */}

      <div className="article-container ">
        <div className="two-logo-margin">
          <h1 className="project-subhead"> Logo</h1>
          <img
            className="img-fluid image-fitted-formobile  d-flex col-9 col-centered mt-5"
            src={WanderLogo}
            alt=""
          />
        </div>
        <h1 className="project-subhead ">Greybox Prototype</h1>
        <p className="wireframe-text">
          After solidifying the ideas on paper I began to refine them through a
          greybox prototype. At this stage I wanted to make sure that the
          navigation was smooth and understandable for the users.
        </p>
        <img
          className="img-fluid image-fitted-formobile two-margin-bottom "
          src={Sketch2Wander}
          alt=""
        />
      </div>

      {/*  wonder video */}

      <div className="article-container ">
        <div className="row flex-row-reverse">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
            <h1 className="project-subhead wander-final-text">
              {" "}
              Final Prototype
            </h1>
            <p className="wireframe-text">
              In order to further visualize Wander, I built a high-fidelity
              interactive prototype that displays the key features of the final
              application using Figma.
            </p>
            <p className="project-link-margin">
              <a
                className="project-link "
                href="https://www.figma.com/proto/foKkCZPRhas9nwqB9Rlp4V/Untitled?node-id=1%3A2&viewport=159%2C176%2C0.171177476644516&scaling=scale-down"
                target="blank"
              >
                VIEW PROTOTYPE
              </a>
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center image-fitted-formobile2">
            <video playsInline loop autoPlay muted className="wander-video">
              <source src={AnimationVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="takeaway-color mt-5">
        {/* key-takeaway-color */}
        <div className="large-container">
          {/* key-takeaway row */}
          <div className=" row mt-5">
            <div className="col-xl-8 col-lg-8 col-md-8 col-centered text-xl-center text-lg-center  text-md-center text-left text-xs-left">
              <div className=" project-subhead"> Key takeaway</div>
              <p className="wireframe-text">
              Working on Wander was challenging and a fun experience. From concept to development this was a project where I could take ownership. I was able to learn a lot about front-end technologies including Sass, Bootstrap,  jQuery etc. It was also my first time working with backend tools like php and MySQL.  The backend part was not fully functional, but I am still proud of making a lot of things work. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      {/* bottom container */}
      <div className="large-container">
        <div className="my-container">
          {/* <hr className="upvote-line"></hr> */}

          {/* other articles */}
          {/* article two */}
          <div className="row next-project">
            <div className="col ">
              <h3 className="text-center">Next Project</h3>
              <Link
                to={`/article/${item3.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/3`}
              >
                <div className="d-flex justify-content-center">
                  <h1>{item3.name}</h1>
                  <img className="next-icon" src={Next} alt="" />
                </div>
              </Link>
            </div>
          </div>
          {/* end of row */}
        </div>
        {/* end of my-container */}
      </div>
    </>
  );
};
