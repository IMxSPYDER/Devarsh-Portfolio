// import React from 'react'
// import HeroSection from './components/HeroSection'
// import { NavLink } from "react-router-dom";

// import styled from "styled-components";
// import { Button } from "../src/styles/Button";
import './Aboutcss.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import devarsh from './fade1.png';


const About = () => {

    // const data = {
    //     name: "devarsh",
    //     image: "https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg"
    // }

    const [key, setKey] = useState('tab2')

  return (
    <div>
      <div className="flex">
        <div className="section-hero-data">
          <p className="hero-top-data">Decoding My Profession</p>
          <h1 className="hero-heading">About Me</h1>
          <p className="hero-para">
          I am Devarsh Chandiwade, a developer with expertise in front-end and back-end development. I create visually appealing and functional websites using HTML, CSS, JavaScript, and other modern web technologies. Check out my portfolio for a glimpse of my work!
          </p>

          <div className="experence">
            <div className="developer">
              <div className="logo">
                <img src="https://www.edyoda.com/static/media/fullstack-icon-01.23a149a3.svg" alt="" className='image'/>
              </div>
              <div className="info">
                  <h1>Full Stack Develpoer</h1>
                  <p>At the Fast Way</p>
              </div>
            </div>
            <div className="developer">
              <div className="logo">
                <img src="https://cdn.dribbble.com/users/66221/screenshots/1655593/html5.png" alt="" className='image'/>
              </div>
              <div className="info">
                  <h1>Senior HTML Developer</h1>
                  <p>At the Fast Way</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* for image  */}
        <div className="section-about-image">
          
            <img src={devarsh} alt="heroimage" className="hero-img " />
          
        </div>
      </div>

      
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList>
          
          <Tab eventKey="tab2">Skills -- 01</Tab>
          <Tab eventKey="tab3">Education -- 02</Tab>
          <Tab eventKey="tab1">Experience -- 03</Tab>
        </TabList>
        {/* <TabPanel>
          <div className="p-info">
            <div className="section">
              <div className="se-info">
                <div className="main">
                  Name
                </div>
                <div className="sub">
                  Devarsh Chandiwade
                </div>
              </div>
              <div className="se-info">
                <div className="main">
                  Age
                </div>
                <div className="sub">
                  18
                </div>
              </div>
              <div className="se-info" style={{border:'none'}}>
                <div className="main">
                  Email
                </div>
                <div className="sub">
                  devarshworking@gmail.com
                </div>
              </div>
            </div>
            <div className="section">
            <div className="se-info">
                <div className="main">
                  Birthday
                </div>
                <div className="sub">
                  10 March, 2005
                </div>
              </div>
              <div className="se-info">
                <div className="main">
                  Address
                </div>
                <div className="sub">
                  Mumbai
                </div>
              </div>
              <div className="se-info" style={{border:'none'}}>
                <div className="main">
                  Experience
                </div>
                <div className="sub">
                   The Fast Way
                </div>
              </div>
            </div>
          </div>
        </TabPanel> */}
        
        <TabPanel>
          <div className="s-info">
            <div className="skill">
              <div className="logo" style={{background:"#fb503b"}}>
                <i class="fa-brands fa-laravel"></i>
              </div>
              <div className="name">
                Object Orientd Programming
              </div>
              <div className="progress">
                <div className="in-num">
                  75%
                </div>
                <div className="letter">
                <div className="le-name">Object Orientd Programming</div>
                <div className="in-bar">
                  <div className="pro"> </div>
                </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="logo" style={{background:"#61DBFB"}}>
              <i class="fa-brands fa-react"></i>
              </div>
              <div className="name">
                React JS
              </div>
              <div className="progress">
                <div className="in-num">
                  95%
                </div>
                <div className="letter">
                <div className="le-name">Front-End with React</div>
                <div className="in-bar">
                  <div className="pro reactjs"> </div>
                </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="logo" style={{background:"#e34c2e"}}>
              <i class="fa-brands fa-html5"></i>
              </div>
              <div className="name">
                Advance frontend development
              </div>
              <div className="progress">
                <div className="in-num">
                  85%
                </div>
                <div className="letter">
                <div className="le-name">Advance frontend development</div>
                <div className="in-bar">
                  <div className="pro html"> </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
        <div class="col-lg-12">
            <ul class="education-table">
                <li>
                  <li>
                    <h4>SSC</h4>
                    <h5>Maharani Saibai Vidyamandir</h5>
                    <span>2020</span>
                    <p>
                        The training provided by school in order to prepare students to work in various sectors of the economy or areas of culture.
                    </p>
                    </li>
                </li>
                <li>
                <li>
                    <h4>Diploma in Information Technology(IT)</h4>
                    <h5>Government Polytechinc Mumbai</h5>
                    <span>2020 - 2023</span>
                    <p>
                        Completed Diploma in IT at Government Polytechnic Mumbai with 90.17%. Acquired hands-on skills in programming, networking, and systems analysis. Excelled in team projects, problem-solving, and adapting to emerging technologies. 
                    </p>
                    </li>
                </li>
                <li>
                  <li>
                    <h4>B.Tech Computer Science & Engineering (ICB)</h4>
                    <h5>Dwarkadas J.Sanghvi College Of Engineering</h5>
                    <span>2023 - 2026</span>
                    <p>
                    Currently pursuing B.Tech in computer science and Engineering (IoT,Cyber Security with Blockchain Technology) from DJ.Sanghvi College of Engineering. Here I leran new skill and apply on real world problems. Since then, I started learning programming  & solving problems based on data structure and algorithms.  
                    </p>
                    </li>
                </li>
                {/* <li>
                  <li>
                    <h4>Web Developer &amp; Trainer</h4>
                    <h5>Apple Developer Team</h5>
                    <span>2012 - 2016</span>
                    <p>
                        The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. 
                    </p>
                    </li>
                </li>
                <li>
                    <h4>Sr. Software Engineer</h4>
                    <h5>Google Out Tech</h5>
                    <span>2017 - Present</span>
                    <p>
                        The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. 
                    </p>
                </li> */}
            </ul>
        </div>
        </TabPanel>

        <TabPanel>
        <div class="col-lg-12">
            <ul class="education-table">
                <li>
                  <li>
                    <h4>SDE @ Intern</h4>
                    <h5>The Fast Way.in</h5>
                    <span>2023-2023</span>
                    <p>
                        Completed 6 month internship at The Fast Way.In.  Gain knowledge about web development during internship. Learn New skills, languages and framework like React JS, React Native, Java-Script,etc.                    
                    </p>
                    </li>
                </li>
                {/* <li>
                <li>
                    <h4>Diploma in Information Technology(IT)</h4>
                    <h5>Government Polytechinc Mumbai</h5>
                    <span>2020 - 2023</span>
                    <p>
                        The training provided by college in order to prepare student to work in IT sectors of the economy or areas of business. 
                    </p>
                    </li>
                </li>
                <li>
                  <li>
                    <h4>B.Tech Computer Science & Engineering (ICB)</h4>
                    <h5>Dwarkadas J.Sanghvi College Of Engineering</h5>
                    <span>2023 - 2026</span>
                    <p>
                        The training provided by college in order to prepare student to work in IT sectors of the economy or areas of business. 
                    </p>
                    </li>
                </li>
                <li>
                  <li>
                    <h4>Web Developer &amp; Trainer</h4>
                    <h5>Apple Developer Team</h5>
                    <span>2012 - 2016</span>
                    <p>
                        The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. 
                    </p>
                    </li>
                </li>
                <li>
                    <h4>Sr. Software Engineer</h4>
                    <h5>Google Out Tech</h5>
                    <span>2017 - Present</span>
                    <p>
                        The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. 
                    </p>
                </li> */}
            </ul>
        </div>
        </TabPanel>
      </Tabs>







        
    </div>
  );
};




export default About
