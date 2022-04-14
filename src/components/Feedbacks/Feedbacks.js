import React from 'react';
import styled from 'styled-components';
import Carrosel from './Carrosel';

const Section = styled.section`
 color: #ECF235;
`

const Box = styled.div`
 width: 100%; // center styled
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const Feedbacks = () => {
    return (
        <>
         <Section className='Feedbacks' id='usuarios'>
             <div className='container'>
                 <div className='heading text-center'>
                     <h1>FEEDBACKS</h1>
                     <h3>O QUE O PESSOAL ESTÁ ACHANDO?</h3>
                 </div>
            <Box> <Carrosel /> </Box>
             </div>
         </Section>
        </>
    )
}

export default Feedbacks;