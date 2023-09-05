import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import { Button } from "../styles/Button";
import "./HeroSection.css";
// import photo from "../../public/images/devarsh-removebg.png"
// import { useGlobalContext } from "../context";

import logo from "./devarsh-removebg2.png"
import web from "./web-development.png"
import app from "./app-development.png"
import fullstack from "./full-stack-dev.png"
import Line from '../Curve_line.png'


const HeroSection = () => {

  return (                  
    <div className="container">
      <div className="grid">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">Devarsh Chandiwade</h1>
          <p className="hero-para">
            I'm Frontend Developer with high level of experience in web desingning and development, producting Quality work.
          </p>

          <NavLink to="/About" className="btn">
          <Button className="btn hireme-btn">
             Know More
          </Button>
          </NavLink>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={logo} alt="heroimage" className="hero-img " />
          </picture>
        </div>
      </div>


      <div id="exp">
    <div className="exp">
        <div className="title">
            <h1>My Expertise</h1>
            <h2>What I do</h2>
        </div>

        <div className="feild">
            <div className="ff">
                <div className="logo">
                    <img src={web} alt="img"/>
                </div>
                <div className="info">
                    <h3>Web Development</h3>
                    <p>Web development refers to me to do creating, building, and maintaining of websites. It includes aspects such as web design, web publishing website with multiple technologies like HTML & PHP, React JS & Firebase.</p>
                </div>
            </div>
            <div className="ff">
                <div className="logo">
                    <img src={app} alt="img"/>
                </div>
                <div className="info">
                    <h3>App Development</h3>
                    <p>Android App development refers to me to do creating, building, and maintaining of App. It includes aspects such as app design, app publishing, Java programming, and firebase database management.</p>
                </div>
            </div>
            <div className="ff ffe">
                <div className="logo">
                    <img src={fullstack} alt="img"/>
                </div>
                <div className="info">
                    <h3>Full Stack Development</h3>
                    <p>In Full Stack Development, I work with Frontend as well as Backend Process, In Backend I know about PHP & Firebase. In that I learn manage the real time database, cloud database, and google analytics.</p>
                </div>
            </div>
        </div>
        

    </div>
    <div className="image">
            <img src={Line} alt="img"/>
        </div> 
</div> 
        
    </div>
  );
};



export default HeroSection;