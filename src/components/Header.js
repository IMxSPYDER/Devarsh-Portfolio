import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/Devarsh-Portfolio">
        <h2><span>D</span>evarsh.</h2>
            {/* <img src="https://github.com/thapatechnical/reactmultipage/blob/main/public/images/logo.png?raw=true" alt="hi" className='logo'/> */}
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
  height: 10rem;
  background: linear-gradient(45deg, #90cbdf 0%, #e9cdd5 70%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header