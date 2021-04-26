import React, { useEffect, useState } from "react";
import TopSection from "./ArticleTopSection/ArticleTopSection";
import Data from "./../pages/article-content";
import { Link } from "react-router-dom";
import Next from "../images/next.svg";

export default ({ match }) => {
  const name = match.params.name;

  console.log(name);

  const [setArticleInfo] = useState({ upvotes: 0, comments: [] });

  const item1 = Data.find((x) => x.id === "01");
  // const item2 = Data.find((x) => x.id === "02");
  const item3 = Data.find((x) => x.id === "03");

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
      <TopSection data={item3}></TopSection>
      <div className="article-container">
        {" "}
        <h1 className="comingsoon">Coming Soon</h1>
      </div>
      <hr></hr>
      {/* bottom container */}
      <div className="container-xl container-lg">
        <div className="my-container">
          {/* <hr className="upvote-line"></hr> */}

          {/* other articles */}
          {/* article two */}
          <div className="row next-project">
            <div className="col ">
              <h3 className="text-center">Next Project</h3>
              <Link
                to={`/article/${item1.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/1`}
              >
                <div className="d-flex justify-content-center">
                  <h1>{item1.name}</h1>
                  <img className="next-icon" src={Next} alt="" />
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
    </>
  );
};
