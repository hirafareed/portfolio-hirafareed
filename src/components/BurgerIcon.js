import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Lottie from "react-lottie";
import animationlogo from "../lottie/logowhite.json";

import "./BurgerIcon.scss";

export default withRouter(({ location, open, ...props }) => {
  const [style, setStyle] = useState({
    backgroundColor: "#fff",
  });

  const [pathname, setPathname] = useState("/");
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const { pathname } = location;
    setPathname(pathname);
    if (!pathname.includes("article")) {
      setStyle({ backgroundColor: "#404040" });
    } else {
      setStyle({ backgroundColor: "#fff" });
    }
  }, [location.pathname]);

  return (
    <div>
      <div
        className={`d-block d-md-none ${
          open ? "burger-menu open" : "burger-menu"
        }`}
        style={{ width: "92%" }}
        {...props}
      >
        <div className="d-flex justify-content-between">
          <div
            style={{ height: "50px", width: "60px" }}
            onMouseOver={() => {
              setAnimate(false);
              console.log("animate", animate);
            }}
            onMouseOut={() => setAnimate(true)}
          >
            <Lottie
              style={{ display: open ? "block" : "none" }}
              className="lottielogo"
              options={{
                loop: true,
                autoplay: true,
                animationData: animationlogo,
              }}
              isStopped={animate}
            ></Lottie>
          </div>
          <div>
            <div
              className="bar1"
              key="b1"
              style={{
                backgroundColor:
                  open || pathname.includes("article")
                    ? "white"
                    : style.backgroundColor,
              }}
            />
            <div
              className="bar2"
              key="b2"
              style={{ backgroundColor: style.backgroundColor }}
            />
            <div
              className="bar3"
              key="b3"
              style={{
                backgroundColor:
                  open || pathname.includes("article")
                    ? "white"
                    : style.backgroundColor,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
