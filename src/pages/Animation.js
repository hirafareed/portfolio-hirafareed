import React from "react";
import Lottie from "../lottie-react-web";
import animation from "../lottie/lot-data.json";

const Animation = ({ x, y }) => (
  <Lottie
    options={{
      animationData: animation
    }}
    animationControl={{
      "Square,Transform,Position": [x, y]
    }}
  />
);
export default Animation;
