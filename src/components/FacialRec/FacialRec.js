import React from "react";
import "./FacialRec.css";

const FacialRec = ({ imageUrl, box }) => {
  console.log("SEXSEXSEX");
  console.log("BOX INF FACIAL COMPONENT", box);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FacialRec;
