import React from "react";
import RMIT from "portfolio/src/Home/Assets/rmit.svg";
import UOS from "portfolio/src/Home/Assets/UOS.svg";
import TMC from "portfolio/src/Home/Assets/tmc.svg";
import "PortFolio/src/Home/Home.css";

export default function Work() {
  return (
    <>
      <div  className="WorkTtl">Experience</div>
      <div id="Work" className="Work-Contain">
        <div className="work">
          <div className="workTitle">
            <img src={RMIT} alt="" className="WorkPlace" />
            <div className="WorkDate">Feb 2022 - Nov 2022</div>
          </div>
          <div className="workDesc">
            I completed my studies at the RMIT Java Bootcamp, an intensive
            program designed to equip students with robust skills in Java
            development. The bootcamp provided a comprehensive understanding of
            Java programming, covering everything from basic syntax to advanced
            concepts. This rigorous training has laid a strong foundation for my
            career in software development, allowing me to tackle complex coding
            challenges with confidence.
          </div>
        </div>
        <div className="work">
          <div className="workTitle">
            <img src={TMC} alt="" className="WorkPlace" />
            <div className="WorkDate">May 2024 - August 2024</div>
          </div>
          <div className="workDesc">
            Memory updated I graduated from the Teach Me Code! Bootcamp, where I
            specialized in Front-End Development with a focus on React.js and
            HTML. This intensive program provided me with hands-on experience
            and the skills needed to build dynamic, responsive web applications.
            It was a pivotal step in my journey as a developer, equipping me
            with the tools to excel in front-end development.
          </div>
        </div>
        <div className="work">
          <div className="workTitle">
            <img src={UOS} alt="" className="WorkPlace" />
            <div className="WorkDate">Jan 2023 - present</div>
          </div>
          <div className="workDesc">
            I am currently pursuing a degree in Computer Science at the
            University of Sharjah, where I'm deepening my knowledge of software
            development, algorithms, and data structures. This program is
            helping me build a strong foundation in computer science principles
            and preparing me for a successful career in the tech industry.
          </div>
        </div>
      </div>
    </>
  );
}
