import React from 'react';
import styled from 'styled-components';
import LogoCanedo from '../../images/canedo.png';
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const Section = styled.section`
 min-height: 100vh;
 width: 100vw;
 position: relative;
 color: black;

 display: flex;
 //justify-content: center;
 //align-items: center;
 flex-direction: column;
`

const Container = styled.div`
 width: 75%;
 margin: 2rem auto;
 display: flex;
 justify-content: space-between;
 align-items: center;

 border-bottom: 2px solid gray;
`
const Left = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const IconList = styled.div`
 display: flex;
 align-items: center;
 margin: 1rem auto;

 &>* {
   padding-right: 0.5rem;
   transition: all 0.2s ease;

 &*:hover {
   transform: scale(1.2);
 }
}
`
const MenuItems = styled.ul`
 list-style: none;
 width: 50%;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(3, 1fr);
 grid-gap: 1rem;
`

const Item = styled.li`
 width: fit-content;
 cursor: pointer;

 &::after {
   content: ' ';
   display: block;
   width: 0%;
   height: 2px;
   background: black;
   transition: width 0.3s ease;
 }
 &:hover::after {
   width: 100%;
 }
`
const Bottom = styled.div`
 width: 75%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;

 a {
   text-decoration: underline;
 }
`

const Footer = () => {
  return (
    <Section> 
     <Container>
       <Left>
         <LogoCanedo />
         <IconList>
           <a href="https://www.instagram.com/canedopriv/" target="_blank"
           rel="noopener"
           >
             <AiFillInstagram size={25}/>
           </a>
           <a href="https://twitter.com/canedopriv" target="_blank"
           rel="noopener"
           >
             <AiFillTwitterCircle size={25} />
           </a>
           <a href="https://github.com/rafabcanedo" target="_blank"
           rel="noopener"
           >
             <AiFillGithub size={25} />
           </a>
         </IconList>
       </Left>
       <MenuItems>
        <Item>Home</Item>
        <Item>Sobre Mim</Item>
        <Item>Projetos</Item>

        <Item>Comunidade</Item>
        <Item>Feedbacks</Item>
        <Item>Contato</Item>
       </MenuItems>
     </Container>  
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Canedo Development. All rights reserved.
        </span>
        <span>
          Development by <a href="https://www.instagram.com/canedopriv/" target="_blank" rel="noopener" >
            Canedo Dev .
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer;