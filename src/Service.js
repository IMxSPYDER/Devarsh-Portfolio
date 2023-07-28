import React from 'react'
import '../src/Servicecss.css'
import { NavLink } from 'react-router-dom'
import Gpmiic from "./GPMIIC.jpeg"
import Droneairgear from './Droneairgear.jpeg'
import Dobot from './Dobot.jpg'
import Cloning from './voicecloning.jpg'



const Service = () => {
  return (
    <div className='work'>
      <div className="infos">
        <div className="headings">
          <div className="sub-head">
            RECENT WORK
          </div>
          <div className="main-head">
          Look at my work and
          give me your feedback
          </div>
        </div>
        <div className="content">
            <div className="project">
              <div className="number">
                5
              </div>
              <div className="words">
                Completed Project
              </div>
            </div>
            <div className="project" style={{border:"none"}}>
              <div className="number">
                94%
              </div>
              <div className="words">
                Positive Rating
              </div>
            </div>
        </div>
      </div>

      <div className="projects">
        <div className="pro-box">
          <img src={Gpmiic} alt="" />
          <div className="content">
            <div className="heading">
              <div className="head">
                Web Development
              </div>
              <div className="sub-head">
              Government Polytechnic Mumbai IIC
              </div>
            </div>
            <NavLink to="https://gpminnovationcell.com/" target='_blank' className="link">
              <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="pro-box">
          <img src={Droneairgear} alt="" />
          <div className="content">
            <div className="heading">
              <div className="head">
                Web Development
              </div>
              <div className="sub-head">
              Drone Air Gear Learning Platform
              </div>
            </div>
            <NavLink to="https://droneairgear.com/" target='_blank' className="link">
              <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="pro-box">
          <img src={Dobot} alt="" />
          <div className="content">
            <div className="heading">
              <div className="head">
                Electronics
              </div>
              <div className="sub-head">
              Dobot Magician pick & place controller
              </div>
            </div>
            <NavLink to="https://github.com/IMxSPYDER/Dobot-Magician/tree/main/dobot-main" target='_blank' className="link">
              <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="pro-box">
          <img src={Cloning} alt="" />
          <div className="content">
            <div className="heading">
              <div className="head">
                Artificial intelligence
              </div>
              <div className="sub-head">
              Real time voice cloning
              </div>
            </div>
            <NavLink to="https://github.com/IMxSPYDER/VoiceCloning" target='_blank' className="link">
              <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Service
