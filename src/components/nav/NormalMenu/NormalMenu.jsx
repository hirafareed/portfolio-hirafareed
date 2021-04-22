import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Lottie from "react-lottie";
import animationlogo from "../../../lottie/logoblack.json";
import logowhite from "../../../lottie/logowhite.json";
import { Navbar, Nav } from "react-bootstrap";
// import "./NormalMenu.scss";

export default withRouter(({ location }) => {
  const [style, setStyle] = useState({
    backgroundColor: "#fff",
    color: "black",
  });
  const colors = {
    "1": "#747FFF",
    "2": "#E6ABAC",
    "3": "#3EDBB4",
  };
  const [animate, setAnimate] = useState(true);
  const [whiteLogo, setWhiteLogo] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    const article = pathname.split("/")[pathname.split("/").length - 1];
    if (colors[article]) {
      setWhiteLogo(true);
      setStyle({ backgroundColor: colors[article], color: "#fff" });
    } else {
      setWhiteLogo(false);
      setStyle({ backgroundColor: "#fff", color: "#404040" });
    }
  }, [location.pathname,location,colors]);

  return (
    <div
      className="d-sm-block main"
      style={{ padding: "10px", backgroundColor: style.backgroundColor }}
    >
      <Navbar expand="md" className="navbar">
        <Navbar.Brand
          onMouseOver={() => {
            setAnimate(false);
            console.log("animate", animate);
          }}
          onMouseOut={() => setAnimate(true)}
        >
          <Link className="navbar-brand text-primary" to="/">
            <Lottie
              className="lottielogo"
              style={{ color: style.color }}
              options={{
                loop: true,
                autoplay: true,
                animationData: whiteLogo ? logowhite : animationlogo,
              }}
              isStopped={animate}
            ></Lottie>
          </Link>
        </Navbar.Brand>

        {/* <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/">
              <h2 style={{ color: style.color }}>Work</h2>
            </Link>

            <Link className="nav-item nav-link" to="/about">
              <h2 style={{ color: style.color }}>About</h2>
            </Link>

            <Link className="nav-item nav-link" to="/contact">
              <h2 style={{ color: style.color }}>Contact</h2>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});
