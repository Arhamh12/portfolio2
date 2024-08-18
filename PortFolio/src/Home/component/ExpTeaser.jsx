import React from 'react'
import CPP from "portfolio/src/Home/Assets/cpp.svg"
import Reac from "portfolio/src/Home/Assets/react.svg"
import Java from "portfolio/src/Home/Assets/java.svg"
import JS from "portfolio/src/Home/Assets/js.svg"
import HTML from "portfolio/src/Home/Assets/html.svg"
import CSS from "portfolio/src/Home/Assets/css.svg"
import 'PortFolio/src/Home/Home.css'

export default function ExpTeaser(){

    return(
        <>
            <div  className="Exp">
                <div className="expTtl">
                    Experience With
                </div>
                <div className="expImgs">
                    <img src={CPP} alt="" className="expImg" />
                    <img src={Java} alt="" className="expImg" />
                    <img src={HTML} alt="" className="expImg" />
                    <img src={CSS} alt="" className="expImg" />
                    <img src={JS} alt="" className="expImg" />
                    <img src={Reac} alt="" className="expImg" />
                </div>
            </div>
        </>
    )
}