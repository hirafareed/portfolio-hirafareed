import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import "./BurgerIcon.scss";

export default withRouter(({ location, open, ...props }) => {
  const [style, setStyle] = useState({
    backgroundColor: "#fff",
  });

  const [pathname, setPathname] = useState("/");

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
          <div>
            <h1 style={{ color: "#FFF", display: open ? "block" : "none" }}>
              Hira.
            </h1>
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
