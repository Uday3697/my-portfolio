import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import insta from "../../img/instagram.png"
import linked from "../../img/linkedin.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Glassimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! i Am </span>
                    <span>Uday Kumar Sah</span>
                    <span>Frontend Devloper with high level of experience
                        in the web designing and devlopment,producting the qwality work
                    </span>

                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="github.com">
                        <img src={Github} alt="" />
                    </a>
                    <a href="linkedin.com"><img src={linked} alt="" /> </a>
                    <a href="instagram.in"><img src={insta} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={Glassimoji} alt="" />
                <div style={{ top: "-4%", left: "68%" }}>
                    <FloatingDiv image={Crown} text1="Web" text2="Devloper" />
                </div>
                <div style={{ top: "18rem", left: "0rem" }}>
                    <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
                </div>
                <div className="blur" style={{ backgroundColor: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: '21rem', height: "11rem", left: '-9rem' }}></div>


            </div>
        </div>
    )
}

export default Intro