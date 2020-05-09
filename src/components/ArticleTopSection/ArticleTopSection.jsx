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
        <div className="large-container pt-5 flex-column-reverse">
          {/* row1 */}
          <div className="header-row row flex-row-reverse ">
            {/* column1  */}

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-centered  ">
              <img
                className="mainimage "
                src={data.headerImage}
                alt={data.name}
              />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 header-text-bg  ">
              <h3 className="header-text  align-items-center ">
                {data.headerText}
              </h3>
            </div>
            {/* column2 */}
          </div>

          {/* end dof row */}
        </div>

        {/* end of container */}
      </div>
      {/* end of color header */}

      <div className="large-container">
        <div className="my-container">
          <h1 className="project-name text-left">{data.name}</h1>

          <div className="row project-about mt-5">
            <div className="col-xl-5  col-lg-5 col-sm-12 text-left">
              <h6 className="project-subhead">Tools</h6>
              <p className="project-info new-line"> {data.tools}</p>
              <h6 className="project-subhead">Timeline</h6>
              <p className="project-info">{data.timeline}</p>
              <h6 className="project-subhead ">My role: </h6>
              <p className="project-info new-line">{data.myRole}</p>
            </div>

            <div className="col-xl-6 col-lg-6 col-sm-12 text-left">
              <h6 className="project-subhead ">Overview</h6>
              <p className="project-info new-line"> {data.overview}</p>
            </div>
          </div>

          <div className="row approach">
            <div className="col-lg-9 approach-image">
              {" "}
              <img
                className="img-fluid"
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
