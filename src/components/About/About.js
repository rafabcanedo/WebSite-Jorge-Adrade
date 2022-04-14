import React from 'react';
import './About.css';
import styled from 'styled-components';
import TextInfo from '../TextInfo';

import Cartoon from '../../images/test32.jpg';

const Section = styled.section`
 min-height: 100vh;
 width: 100%;
 background-color: #ecf0f3;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
`

const Container = styled.div`
 width: 75%;
 margin: 0 auto;

 display: flex;
 justify-content: center;
 align-items: center;
`

const Box = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const Title = styled.h2`
 font-size: 28;
 text-transform: capitalize;
 color: black;
 align-items: flex-start;
 width: 80%;
 margin: 0 auto;
`

const About = () => {
  return (
  <Section>
    <div className='container'>
          <div className='heading text-center'>
              <h1>Sobre Mim</h1>
          </div>
    
   <Container>
     <Box>  <img src={Cartoon} alt='' /> </Box>
     <Box>
       <Title>
         Um pouco Sobre Minha História
       </Title>
       <TextInfo>
              Meu nome é Eu Memo e Descrição Text mais texto tipo
              muito mais texo de teste para ver até onde é bom. Eu
              tu nós gostamos de acaí nao tem jeito acho que até aqui está bom.
              Não um pouco mais estou pensando em o que colocar aqui esssa 
              é a verdade verdadeira.
              As vezes sinto que pode ser mais duas linhas vou testar aqui
              Acai Acai com banana e leite em pó por favor.
       </TextInfo> 
     <div className='about_button'>
            <div className='btn_center'>
             <a className='btn_link' href="/features">Projetos</a>
            </div>
            <div className='btn_center'>
             <a className='btn_link' href="/contact">Entre em Contato</a>
            </div>
            </div>
     </Box>
   </Container>
   </div>
  </Section>
  )
}

export default About;

/*
 <div className='heading text-center'>
              <h1>Sobre Mim</h1>
          </div>
*/