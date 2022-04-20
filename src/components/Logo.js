import React from 'react';
import styled from 'styled-components';

const LogoText = styled.h1`
 font-family: 'Akaya Telivigala', cursive;
 font-size: 3em;
 color: '#202020';
 transition: all 0.2s ease;
 &:hover {
     transform: scale(1.1);
 }
 @media (max-width: 64em) {
   font-size: 3em;
 }
`

const Logo = () => {
    return (
     <LogoText>
        Canedo.
     </LogoText>
    )
}

export default Logo;