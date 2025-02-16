import React from "react";
import { Link, NavLink } from "react-router-dom";
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

import Dresume from '../components/Devarsh_Resume.pdf'


const HeroSection = () => {

  return (                  
    <div className="container">
      <div className="grid">
        <div className="section-hero-data">
          <p className="hero-top-data">Hello! My Name is</p>
          <h1 className="hero-heading">Devarsh Chandiwade</h1>

          <p className="hero-para">
          An aspiring software engineer with the ability to grow as an individual and learn in the surrounding of talented people.

          I am always open for discussions <Link to="https://www.linkedin.com/in/devarsh-chandiwade/" target="_blank" className="link">@Linkedin.</Link>
          </p>

          {/* <p className="hero-para">
          Hello! Interestingly, I have been a student of Maths in my high school and got introduced to programming in my freshman year at Dwarkadas .J Sanghvi. My interest in coding started back in 2020 during first year of Diploma . Since then, I started learning programming languages & solving problems based on data structure and algorithms. Most importantly I'm a Problem Solver.
          <br/>
          Today, I'm currently pursuing my Bachelors in Computer Science and Engineering (2023-2026) with 8.59 GPA aggregate.
          <br/>
          Also I've knowledge of Web Development and created some projects on that using HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other cool libraries and frameworks. I'm also part of some student organisations and Leading one of them.
  
          </p> */}

          <a href={Dresume} download className="btn">
          <Button className="btn hireme-btn">
             Resume
          </Button>
          </a>
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
