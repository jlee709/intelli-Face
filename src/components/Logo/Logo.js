import React from "react";
import Tilt from "react-tilt";
import code from "./code.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          {" "}
          <img style={{ paddingTop: "6px" }} alt="logo" src={code} />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
