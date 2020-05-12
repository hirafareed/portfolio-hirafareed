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
          <div className="article-container">
            <div className="row">
              <div className="col">
                <h1 className=" one-project-subhead">Typography</h1>
                <h1 className="   one-font">BARLOW</h1>
              </div>
            </div>

            <div className="row typography-one">
              <div className="col-xl-6 col-lg-6 col-md-6 ">
                <p className="one-barlow-regular"> Regular</p>
                <p className="barlow-regular-text">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm cNn Oo Pp Qq Rr Ss Tt
                  Uu Vv Ww Xx Yy Zz
                </p>
              </div>
              <div className="barlow-semibold col-xl-6 col-lg-6 col-md-6 ">
                <p className="one-barlow-semibold"> Semibold</p>
                <p className="barlow-semibold-text">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="article-container">
          {/* colors */}

          <div className="one-color-container">
            <div className="row">
              <div className="col">
                <h1 className="project-subhead">Color</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-centered">
                <img className="one-color-image img-fluid" src={Color1} />
                <p className="wireframe-text ">#69C9D6</p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-centered">
                <img className="one-color-image img-fluid" src={Color2} />
                <p className="wireframe-text">#FE9491</p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-centered">
                <img className="one-color-image img-fluid" src={Color3} />
                <p className="wireframe-text">#747FFF</p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-centered">
                <img className="one-color-image img-fluid" src={Color4} />
                <p className="wireframe-text">#F7AA70</p>
              </div>
            </div>
          </div>

          {/* process */}
          <div className="row">
            <div className="col-xl-6  col-lg-6 one-process-container">
              <h1 className="project-subhead">Process</h1>
            </div>
          </div>

          <div className="row image-fitted-formobile ">
            <div className="col-xl-12  col-lg-12 o col-md-12 mt-5 col-centered ">
              <img
                className="img-fluid image-fitted-formobile "
                src={Sketch1}
              />
            </div>
          </div>
        </div>
        {/* end of container */}
        {/* more process */}

        <img className="img-fluid col one-process-sketch2" src={Sketch2} />

        {/* wireframes */}

        <div className="article-container">
          {/* subhead */}
          <div className="row">
            <div className="col">
              <h1 className="project-subhead one-wireframes-container">
                Final Outcome
              </h1>
              <p className="wireframe-text">
                A walkthrough of Talk n roll and it’s features
              </p>
            </div>
          </div>
          {/* wireframe1 */}
          <div className="row mt-5  flex-row-reverse image-fitted-formobile">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <h1 className="project-subhead">Sign in</h1>
              <p className="wireframe-text">
                User has the option to choose between different games, location
                or according to popularity. Once he chooses the event, he gets
                more options where he can select between different days and
                time.
              </p>
            </div>
            <div className="col-xl-7 col-lg-7  col-md-7">
              <img className="img-fluid approach-image" src={Screen2} />
            </div>
          </div>

          {/* wireframe2 */}
          <div className="row mt-5  flex-row-reverse image-fitted-formobile  ">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <h1 className="project-subhead">Main feed</h1>
              <p className="wireframe-text">
                User has the option to choose between different games, location
                or according to popularity. Once he chooses the event, he gets
                more options where he can select between different days and
                time.
              </p>
            </div>
            <div className="col-xl-7 col-lg-7  col-md-7">
              <img className="img-fluid approach-image" src={Screen2} />
            </div>
          </div>

          {/* wireframe3 */}
          <div className="row mt-5 flex-row-reverse image-fitted-formobile  ">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <h1 className="project-subhead">Events</h1>
              <p className="wireframe-text">
                After the user selects the event, there’s more information that
                he can read about that event. Clicking on “attend” lets him add
                it to the calendar
              </p>
            </div>
            <div className="col-xl-7 col-lg-7  col-md-7">
              <img className="img-fluid approach-image " src={Screen3} />
            </div>
          </div>
          {/* demo row */}
          <div className="demo-row">
            <div className="col">
              <h1 className=" project-subhead mt-5">Demo</h1>
              <p className="wireframe-text">
                In order to further visualize talk n roll, I built a
                high-fidelity interactive prototype that displays the key
                features of the final application using Figma.
              </p>

              <p className="project-link-margin">
                <a
                  className="project-link"
                  href="https://www.figma.com/proto/TZDAfiowf98P0IWvUyrTqp/BB-Prototyping?node-id=69%3A4&viewport=446%2C373%2C0.18485523760318756&scaling=scale-down"
                  target="_blank"
                >
                  VIEW PROTOTYPE
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="takeaway-color mt-5">
          {/* key-takeaway-color */}
          <div className="large-container">
            {/* key-takeaway row */}
            <div className=" row mt-5">
              <div className="col-xl-8 col-lg-8 col-md-8 col-centered text-xl-center text-lg-center  text-md-center text-sm-left">
                <div className=" project-subhead"> Key takeaways</div>
                <p className="wireframe-text">
                  Working on this app helped me to pay attention to the more
                  intricate details on mobile. I had to take into consideration
                  designing for the thumb zone and figuring out how certain form
                  input fields can be altered to better suit smaller touch
                  screens rather than a desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom container */}
      <div className="article-container">
        {/* <hr className="upvote-line"></hr> */}

        {/* other articles */}
        {/* article two */}
        <div className="row next-project">
          <div className="col">
            <h3 className="text-center">Next Project</h3>
            <Link
              to={`/article/${item2.name.replace(/\s+/g, "-").toLowerCase()}/2`}
            >
              <div className="d-flex justify-content-center">
                <h1>{item2.name}</h1>
                <img className="next-icon" src={Next} />
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

        {/* end of my-container */}
      </div>
      {/* end of container */}
    </>
  );
};
