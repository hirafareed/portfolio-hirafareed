import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import UpvotesSection from "../UpvotesSection";
import ScrollAnimation from "react-animate-on-scroll";

import "../../sass/style.scss";

export default withRouter(({ location, data, match }) => {
  const name = match.params.name;
  const [setArticleInfo] = useState({ upvotes: 0 });
  const [color, setColor] = useState("#fff");

  const colors = {
    "1": "#747FFF",
    "2": "#E6ABAC",
    "3": "#3EDBB4",
  };

  useEffect(() => {
    const { pathname } = location;

    const article = pathname.split("/")[pathname.split("/").length - 1];
    if (colors[article]) {
      setColor(colors[article]);
    } else {
      setColor("#fff");
    }
  }, [location.pathname,location,colors]);

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
      <div
        className="header-bg-color"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="article-container pt-5 flex-column-reverse ">
          {/* row1 */}
          <ScrollAnimation animateIn="fadeIn">
            <div className="header-row row flex-row-reverse ">
              {/* column1  */}

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-centered">
                <img
                  className="mainimage "
                  src={data.headerImage}
                  alt={data.name}
                />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 header-text ">
                <h3 className="header-text-type">{data.type}</h3>
                <h3 className="header-text-info ">{data.headerText}</h3>
              </div>
              {/* column2 */}
            </div>
            {/* scroll bar bottom */}
            <div className="d-flex scroll-bar">
              <div className="c-scrolldown ">
                <div className="c-line "></div>
              </div>
              <p className="scroll-info">SCROLL FOR MORE</p>
            </div>
          </ScrollAnimation>

          {/* end of row */}
        </div>

        {/* end of container */}
      </div>
      {/* end of color header */}

      <div className="article-container">
        <div className="my-container">
          <div className="row">
            <h1 className="project-name text-left col-xl-4 col-lg-4  ">
              {data.name}
            </h1>
          </div>

          <div className="row project-about mt-5">
            <div className=" col-xl-6 col-lg-6   col-md-5 col-sm-12 text-left">
              <h6 className="project-subhead">Tools</h6>
              <p className="wireframe-text new-line"> {data.tools}</p>

              <h6 className="project-subhead">Timeline</h6>
              <p className="wireframe-text">{data.timeline}</p>

              <h6 className="project-subhead ">My role: </h6>
              <p className="wireframe-text new-line">{data.myRole}</p>
            </div>

            <div className="col-xl-6  col-lg-6  col-md-6 col-sm-12 text-left">
              <h6 className="project-subhead ">Overview</h6>
              <p className="wireframe-text new-line"> {data.overview}</p>
            </div>
          </div>

          <div className="row challenge">
            <div className="col-xl-12  col-lg-12   col-md-12">
              <h6 className="project-subhead ">Problem</h6>

              <p className="wireframe-text">{data.challenge}</p>
            </div>
          </div>

          <div className="row approach">
            <div className="col-xl-7 col-lg-7  col-md-7 approach-image">
              {" "}
              <img
                className="img-fluid "
                src={data.approachImage}
                alt={data.name}
              />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <h6 className="project-subhead approach-subhead">Solution </h6>

              <p className="wireframe-text">{data.approach}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
