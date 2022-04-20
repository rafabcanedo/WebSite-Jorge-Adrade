import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';

const Section = styled.section`
 width: 10vw;
 background-color: #ecf0f3;
`

const NavBar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;

 width: 85%;
 height: 5rem;
 margin: 0 auto;

 img {
 cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
 }
`

const Menu = styled.ul`
 display: flex;
 justify-content: space-between;
 align-items: center;
 list-style: none;
`

const MenuItem = styled.li`
 margin: 0 1rem;
 color: #000;
 cursor: pointer;

 &::after {
     content: ' ';
     display: block;
     width: 0%;
     height: 2px;
     background: #000;
     transition: width 0.3s ease;
 }

 &:hover::after {
     width: 100%;
 }
`

const Navigation = () => {
    return(
    <Section>
     <NavBar>
      <img src={Logo} alt="" />
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Comunidade</MenuItem>
        <MenuItem>Feedbacks</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>
     </NavBar>
    </Section>
    );
}

export default Navigation;