import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import UpvotesSection from "../UpvotesSection";
import ScrollAnimation from "react-animate-on-scroll";

import "../../sass/style.scss";

export default withRouter(({ location, data, match }) => {
  const name = match.params.name;
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });
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
  }, [location.pathname]);

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
      <div
        className="header-bg-color"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="large-container pt-5 flex-column-reverse ">
          {/* row1 */}
          <ScrollAnimation animateIn="fadeIn">
            <div className="header-row row flex-row-reverse ">
              {/* column1  */}

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-centered  ">
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
              <div class="c-scrolldown ">
                <div class="c-line "></div>
              </div>
              <p className="scroll-info">SCROLL FOR MORE</p>
            </div>
          </ScrollAnimation>

          {/* end of row */}
        </div>

        {/* end of container */}
      </div>
      {/* end of color header */}

      <div className="large-container">
        <div className="my-container">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="project-name text-left">{data.name}</h1>
          </ScrollAnimation>

          <div className="row project-about mt-5">
            <div className="col-xl-5  col-lg-5  col-md-5 col-sm-12 text-left">
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead">Tools</h6>
                <p className="project-info new-line"> {data.tools}</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead">Timeline</h6>
                <p className="project-info">{data.timeline}</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead ">My role: </h6>
                <p className="project-info new-line">{data.myRole}</p>
              </ScrollAnimation>
            </div>

            <div className="col-xl-6 col-lg-6  col-md-6 col-sm-12 text-left">
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead ">Overview</h6>
                <p className="project-info new-line"> {data.overview}</p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row challenge">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead ">Challenge</h6>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <p className="project-info">{data.challenge}</p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row approach">
            <div className="col-xl-9 col-lg-9  col-md-9 approach-image">
              {" "}
              <ScrollAnimation animateIn="fadeIn">
                <img
                  className="img-fluid"
                  src={data.approachImage}
                  alt={data.name}
                />
              </ScrollAnimation>
            </div>
            <div className="col">
              <ScrollAnimation animateIn="fadeIn">
                <h6 className="project-subhead approach-subhead">Approach </h6>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <p className="project-info">{data.approach}</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <p className="project-link-margin">
                  <a
                    className="project-link"
                    href={data.articleLink}
                    target="_blank"
                  >
                    {data.articleLinkText}
                  </a>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
