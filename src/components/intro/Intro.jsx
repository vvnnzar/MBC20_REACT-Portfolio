import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import img from "../../assets/images/Viv.png";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Full Stack Developer", "Business Consultant"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="leftPane">
        <div className="imgContainer">
          <img className="img" src={img} alt="vivianne zara"></img>
        </div>
      </div>
      <div className="rightPane">
        <h1>Vivianne Zara</h1>
        <h3>
          Freelance <span ref={textRef}></span>
        </h3>
      </div>
    </div>
  );
}
