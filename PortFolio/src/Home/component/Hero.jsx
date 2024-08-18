import React from "react";
import cv from "portfolio/src/Home/Assets/CV.pdf";
import HeroImg from "PortFolio/src/Home/Assets/HeroImg.png";
import "PortFolio/src/Home/Home.css";

export default function Hero() {
  return (
    <div id="Home" className="hero">
      <img src={HeroImg} alt="oops" className="HeroImg" />
      <div className="heroText">
        <h1 className="HeroTitle">
          Talk is cheap. Show me the <h1>Code</h1>
        </h1>
        <div className="HeroDesc">
          I’m Arhamh Alshamsi, a skilled front-end developer specializing in
          React and HTML. I graduated from the Teach Me Code Institute and
          thrive on creative problem-solving. Despite being deeply involved in
          the tech world, I have an unusual trait for a developer—I don’t really
          like coffee!
        </div>
      </div>
      <div className="HeroBtns">
        <a href="#Contact">
          <button className="Btn1">Get in Touch</button>
        </a>
        <a href={cv} download={cv}>
          <button className="btn2">Download CV</button>
        </a>
      </div>
    </div>
  );
}
