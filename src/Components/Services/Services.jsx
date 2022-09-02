import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"
import Glasses from "../../img/glasses.png"

import Card from '../Card/Card'

const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Owesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Libero eum distinctio consequuntur sed debitis,
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ left: "14rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma,Sketch,Photoshop,Adobe ,Adobe Xd"}
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Devloper'}
                        detail={"Html,Css,Javascript,ReactJS"}
                    />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"User Interface Designs,Devlopments,Deployments"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple" }}></div>
            </div>
        </div>
    )
}

export default Services