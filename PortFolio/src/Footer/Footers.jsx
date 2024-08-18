import React from "react";
import Facebook from "./Assets/FaceBook.svg";
import IG from "./Assets/IG.svg";
import LN from "./Assets/LN.svg";
import Twitter from "./Assets/Twitter.svg";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";

// #780099

export default function Footers() {
  return (
    <div className="footers">
      <div className="footerTitle">
        Arhamh Alshamsi
      </div>
      <div className="footerDesc">
        Front-end developer with expertise in React and HTML, backed by a solid
        education from the Teach Me Code Institute. Proficient in creative
        problem-solving and dedicated to delivering efficient, high-quality
        solutions that meet client needs and exceed expectations.
      </div>
      <h6>Email:</h6>
      <div className="Email">
        
        <HiOutlineMail className="emailImg"/>
        <p>Arhamh@hamaIt.net</p>
      </div>
      <div className="Footer-Items">
        <img src={Facebook} alt="" className="footerImg" />
        <img src={IG} alt="" className="footerImg" />
        <img src={LN} alt="" className="footerImg" />
        <img src={Twitter} alt="" className="footerImg" />
      </div>
    </div>
  );
}
