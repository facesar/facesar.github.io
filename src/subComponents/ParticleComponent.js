import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';

//particles config files
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';


const Box = styled.div`
position: absolute;
left: 0;
top: 0;
right: 0;
bottom: 0;
z-index: 0;
`

const ParticleComponent = (props) => {
  return (
    <Box>
        <Particles style={{position:"absolute", top:0}} params={props.theme === "dark" ? configDark : configLight}/>
    </Box>
  )
}

export default ParticleComponent
