import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import articleContent from "./article-content";
import "../sass/style.scss";

const ArticlesListPage = () => (
  <>
    <div className="all-articles">
      <div className="subheading-work">
        <hr className="line-work float-left" />
        <h6 className="work-sub mt-5">Work</h6>
      </div>

      <ArticlesList articles={articleContent}></ArticlesList>
    </div>
  </>
);

export default ArticlesListPage;
