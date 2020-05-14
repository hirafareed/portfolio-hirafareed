import React from "react";
import { Link } from "react-router-dom";
import "../../sass/style.scss";
// import MainImage from "./../images/project-one/mainimage.png";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <div
        key={key}
        className={!!key ? "row float-left each-work " : "row  float-left "}
        style={{ flexDirection: !!((key + 1) % 2) ? "row" : "row-reverse" }}
      >
        <div className="col-xl-8 col-lg-8 col-md-8 work-image">
          <Link
            to={`/article/${article.name.replace(/\s+/g, "-").toLowerCase()}/${
              key + 1
            }`}
          >
            <img
              className="img-fluid"
              src={article.mainImage}
              alt="article one"
            />
          </Link>
        </div>

        <div className=" col-xl-4  col-lg-4 col-md-4 work-info">
          <p className={!!((key + 1) % 2) ? "number" : "number2"}>
            {" "}
            {article.id}
          </p>

          <h1 className={!!((key + 1) % 2) ? "name" : "name2"}>
            {" "}
            {article.name}
          </h1>

          <p className={!!((key + 1) % 2) ? "type" : "type2"}>
            {" "}
            {article.type}
          </p>

          <div className="row">
            <p
              className={
                !!((key + 1) % 2)
                  ? "info col-lg-12 col-sm-9  "
                  : "info2 col-lg-12 col-sm-9 "
              }
            >
              {article.subHeading}
            </p>
          </div>

          <Link
            to={`/article/${article.name.replace(/\s+/g, "-").toLowerCase()}/${
              key + 1
            }`}
          >
            <p className={!!((key + 1) % 2) ? "viewwork" : "viewwork2"}>
              VIEW WORK
            </p>
          </Link>
        </div>
      </div>
    ))}
  </>
);

export default ArticlesList;
