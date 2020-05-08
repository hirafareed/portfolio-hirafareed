import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import UpvotesSection from "../UpvotesSection";

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
      <div style={{ backgroundColor: color, height: "84vh" }}>
        <div className="large-container mb-5 p-5 flex-column-reverse">
          <div className="my-container">
            {/* row1 */}
            <div className="header-row row flex-row-reverse">
              {/* column1  */}

              <div className="col-lg-4 col-sm-6 col-centered">
                <img
                  className="mainimage img-fluid"
                  src={data.headerImage}
                  alt={data.name}
                />
              </div>

              <div className="col-lg-6">
                <h3 className="header-text ">{data.headerText}</h3>
              </div>
              {/* column2 */}
            </div>

            <div
              className="scroll-down is-active is-inview"
              scroll-down="home"
              data-controller="opinview"
              op-inview="0, 0.7"
              op-inview-deactivate=""
            >
              <div className="scroll-down__line"></div>
            </div>
            <div className="scroll-down__text">
              <span>scroll for more</span>
            </div>

            {/* end dof row */}
          </div>
        </div>

        {/* end of container */}
      </div>
      {/* end of color header */}

      <div className="container-xl container-lg">
        <div className="my-container">
          <h1 className="project-name text-left">{data.name}</h1>

          <div className="row project-about mt-5">
            <div className="col-lg-6 col-sm-12 text-left">
              <h6 className="project-subhead">Tools</h6>
              <p className="project-info new-line"> {data.tools}</p>
              <h6 className="project-subhead">Timeline</h6>
              <p className="project-info">{data.timeline}</p>
              <h6 className="project-subhead ">My role: </h6>
              <p className="project-info new-line">{data.myRole}</p>
            </div>

            <div className="col-lg-6 col-sm-12 text-left">
              <h6 className="project-subhead ">Overview</h6>
              <p className="project-info new-line"> {data.overview}</p>
            </div>
          </div>

          <div className="row approach">
            <div className="col-lg-10 approach-image">
              {" "}
              <img
                className="mainimage img-fluid"
                src={data.approachImage}
                alt={data.name}
              />
            </div>
            <div className="col">
              <h6 className="project-subhead ">Approah </h6>
              <p className="project-info">{data.approach}</p>
              <p className="project-link-margin">
                <a className="project-link" href={data.articleLink}>
                  {data.articleLinkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
