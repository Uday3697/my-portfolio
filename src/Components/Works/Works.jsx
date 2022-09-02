import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works For All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Libero eum distinctio consequuntur sed debitis,
                </span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-backCircle blueCircle">

                    </div>
                    <div className="w-backCircle yellowCircle">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Works