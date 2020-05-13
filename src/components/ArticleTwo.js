import React, { useEffect, useState } from "react";
import TopSection from "./ArticleTopSection/ArticleTopSection";
import Data from "./../pages/article-content";
import { Link } from "react-router-dom";
import Next from "../images/next.svg";

// import { SccrollView, Dimensions } from "react-native";
// import Video from "react-native-video";
import AnimationVideo from "../images/project-two/countdown.mp4";
import SketchWander from "../images/project-two/wander-sketch.png";
import userflowWander from "../images/project-two/userflow-wander.svg";

export default ({ match }) => {
  const name = match.params.name;

  console.log(name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  const item1 = Data.find((x) => x.id === "01");
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
  }, [name]);

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
                Fatima is planning to go on a trip to Bali and she doesn’t want
                to carry a journal. she wants a way to record her trip.
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  mt-xl-0  mt-lg-0 mt-md-0 mt-3">
            <div className="classWithPad two-audience two-margin-bottom">
              <h1 className="wireframe-text-big m-0">Hafsa (Female, 26)</h1>
              <p className="wireframe-text">
                Hafsa wants to go on a trip for her vacation but she wants some
                inspiration as to where her next vacation should be.
              </p>
            </div>
          </div>
        </div>

        <h1 className="project-subhead mt-5">Designing the prototype </h1>
        <p className="wireframe-text">
          Now that we had a better idea of who we were designing for, we began
          to conceptualize how a system can meet their needs.{" "}
        </p>
        <img
          className="img-fluid image-fitted-formobile two-margin-bottom "
          src={SketchWander}
        />
        <h1 className="project-subhead ">User flow </h1>
        <p className="wireframe-text ">
          A sitemap was created with some basic user-flow points to identify
          where the main points of navigation should be placed. This helped
          eliminate any redundant pages optimizing the user experience.{" "}
        </p>
        <img
          className="img-fluid image-fitted-formobile two-margin-bottom "
          src={userflowWander}
        />

        {/* <div className="background-video">
          <video playsInline loop autoPlay muted className="wander-video">
            <source src={AnimationVideo} type="video/mp4" />
          </video>
        </div> */}
      </div>

      <hr></hr>

      {/* bottom container */}
      <div className="container-xl container-lg">
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
                  <img className="view overlay zoom" src={Next} />
                </div>
              </Link>
            </div>

            {/* <div className="col">
              <h3>Article Three</h3>

              <Link
                to={`/article/${item3.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/3`}
              >
                <img
                  className="img-fluid"
                  src={item3.mainImage}
                  alt="article one"
                />
              </Link>
            </div> */}
          </div>
          {/* end of row */}
        </div>
        {/* end of my-container */}
      </div>
    </>
  );
};
