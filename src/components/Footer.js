import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footercss.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="contact">
      <a href = "mailto: devarshworking@gmail.com" target='_blank' className="link">
        <i class="fa-regular fa-envelope"></i>
      </a>
      <NavLink to="https://www.linkedin.com/in/devarsh-ramesh-chandiwade-7423a624a"  target='_blank'className="link">
      <i class="fa-brands fa-linkedin-in"></i>
      </NavLink>
      <NavLink to="https://wa.me/qr/ENH6PNJC5JIIH1" target='_blank' className="link">
        <i class="fa-brands fa-whatsapp"></i>
      </NavLink>
      </div>
      <div className="reserve">
        © 2023 Devarsh. All Right Reserved
      </div>
    </div>
  )
}

export default Footer
