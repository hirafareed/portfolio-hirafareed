import React, { useEffect, useState } from "react";
import TopSection from "./ArticleTopSection/ArticleTopSection";
import Data from "./../pages/article-content";
import { Link } from "react-router-dom";

import "../sass/style.scss";

import Color1 from "../images/project-one/color1.svg";
import Color2 from "../images/project-one/color2.svg";
import Color3 from "../images/project-one/color3.svg";
import Color4 from "../images/project-one/color4.svg";

import Sketch1 from "../images/project-one/sketch1.png";
import Sketch2 from "../images/project-one/sketch2.png";

import Screen1 from "../images/project-one/screen1.png";
import Screen2 from "../images/project-one/screen2.png";
import Screen3 from "../images/project-one/screen3.png";
import Next from "../images/next.svg";

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
      <TopSection data={item1}></TopSection>
      <div className="">
        {/* typography */}
        <div className="one-background-typography">
          <div className="large-container">
            <h1 className="one-project-subhead">Typography</h1>
            <h1 className="one-font">BARLOW</h1>

            <div className="row typography-one">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="one-barlow-regular"> Regular</p>
                <p className="barlow-regular-text">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm cNn Oo Pp Qq Rr Ss Tt
                  Uu Vv Ww Xx Yy Zz
                </p>
              </div>
              <div className="barlow-semibold col-xl-6  col-lg-6  col-md-6 ">
                <p className="one-barlow-semibold"> Semibold</p>
                <p className="barlow-semibold-text">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="large-container">
          {/* colors */}
          <div className="one-color-container">
            <h1 className="project-subhead">Color</h1>
            <div className="row">
              <div className="col-lg-3 col col-centered">
                <img className="one-color-image img-fluid" src={Color1} />
                <p className="one-color-code ">#69C9D6</p>
              </div>
              <div className="col-lg-3 col col-centered">
                <img className="one-color-image img-fluid" src={Color2} />
                <p className="one-color-code">#FE9491</p>
              </div>
              <div className="col-lg-3 col col-centered ">
                <img className="one-color-image img-fluid" src={Color3} />
                <p className="one-color-code">#747FFF</p>
              </div>
              <div className="col-lg-3 col col-centered">
                <img className="one-color-image img-fluid" src={Color4} />
                <p className="one-color-code">#F7AA70</p>
              </div>
            </div>
          </div>

          {/* process */}
          <div className="one-process-container">
            <h1 className="project-subhead">Process</h1>
          </div>

          <img
            className="img-fluid col mt-5 one-process-sketch1"
            src={Sketch1}
          />
        </div>
        {/* end of container */}
        {/* more process */}

        <img className="img-fluid col one-process-sketch2" src={Sketch2} />

        {/* wireframes */}
        <div className="large-container">
          <h1 className="project-subhead one-wireframes-container">
            Wireframes
          </h1>
          {/* wireframe1 */}
          <div className="row">
            <div className="col">
              <h1 className="one-signin">Sign in</h1>
              <p className="one-signin-info">
                The app requires the user to sign up in-order to register for an
                event. If he’s already <br></br> registered, he can sign in and
                start booking the events.
              </p>
            </div>
          </div>

          <div className="row">
            <img className="img-fluid col col-centered" src={Screen1} />
          </div>
          {/* wireframe2 */}
          <div className="row">
            <div className="col">
              <h1 className="one-mainfeed">Main feed</h1>
              <p className="one-signin-info">
                User has the option to choose between different games, location
                or according to <br></br>popularity. Once he chooses the event,
                he gets more options where he can select <br></br> between
                different days and time.
              </p>
            </div>
          </div>

          <img
            className="img-fluid col-lg-9 col-sm-9 col-centered"
            src={Screen2}
          />

          {/* wireframe3 */}
          <div className="row  mt-5 flex-row-reverse">
            <div className="col-lg-4">
              <h1 className="one-events">Events</h1>
              <p className="one-signin-info">
                After the user selects the event, there’s more information that
                he can read about that event. Clicking on “attend” lets him add
                it to the calendar
              </p>
            </div>
            <img
              className="img-fluid col-lg-8  col-sm-9 col-centered"
              src={Screen3}
            />
          </div>
        </div>
      </div>

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
                to={`/article/${item2.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/2`}
              >
                <div className="d-flex justify-content-center">
                  <h1>{item2.name}</h1>
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
      {/* end of container */}
    </>
  );
};
