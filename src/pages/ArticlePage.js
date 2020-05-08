import React from "react";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const article = articleContent[0];

  if (!article)
    return (
      <h1>
        <NotFoundPage />
      </h1>
    );
  // const otherArticles = articleContent.filter(
  //   (article) => article.name !== name
  // );

  return (
    <>
      <div className="m-5">
        <h1> {article.subheading}</h1>
        <p>{article.type}</p>
        <img src={article.mainImage} alt={article.name} />
        <p>{article.headerImage}</p>
        <p>{article.name}</p>
        <p>{article.tools}</p>
        <p>{article.timeline}</p>
      </div>
      <h3 className="mb-5 mt-5">Other articles</h3>
    </>
  );
};
export default ArticlePage;
