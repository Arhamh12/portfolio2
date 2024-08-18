import React from "react";
import Project1 from "portfolio/src/Home/Assets/HamaIT.png";
import Project2 from "portfolio/src/Home/Assets/HamaMovies.png";
import "PortFolio/src/Home/Home.css";

export default function Projects() {
  return (
    <>
      <div id="Projects" className="Project-contain">
        <div className="ProjectTtl">Projects</div>
        <div className="projects">
          <div className="Project-Info">
            <img src={Project1} alt="" className="projectImg" />
            <div className="projectTitle">HAMA IT</div>
            <div className="projectDesc">A simple, elegant website designed for a small business focused on enhancing the technology hardware and software of other businesses. It efficiently gathers information from clients, offering tailored solutions to elevate their tech infrastructure and drive growth.</div>
          </div>
          <div className="Project-Info">
            <div className="Project">
              <img src={Project2} alt="" className="projectImg" />
              <div className="projectTitle">HAMA Movies</div>
              <div className="projectDesc">My first React application, designed to showcase top-rated movies fetched from an API. Explore a curated selection of films, updated in real-time, highlighting the best in cinema. It's a simple yet powerful tool to discover your next favorite movie.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
