import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import articleContent from "./article-content";
import "../sass/style.scss";
// import Row from "react-bootstrap/Row";
import WorkTogether from "../components/WorkTogether";

const ArticlesListPage = () => (
  <>
    {/* <Row> */}
    <div className="all-articles">
      <div className="subheading-work">
        {/* <hr className="line-work float-left" />
        <h6 className="work-sub mt-5">Work</h6> */}
      </div>

      <ArticlesList articles={articleContent}></ArticlesList>
    </div>
    {/* </Row> */}
    {/* <Row className="last-part"> */}
    <WorkTogether />
    {/* </Row> */}
  </>
);

export default ArticlesListPage;
