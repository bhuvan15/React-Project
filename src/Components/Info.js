import React  from 'react'
import styled from "styled-components"
import DisneyInfo from "./DisneyInfo"
import PixarInfo from "./PixarInfo"
import MarvelInfo from "./MarvelInfo"
import StarwarsInfo from "./StarwarsInfo"
import NatgeoInfo from "./NatgeoInfo"
/* import ScrollAnimation from 'react-animate-on-scroll'; */


function Info() {
 
    return (
        <Container>
           {/*  <ScrollAnimation animateIn="fadeIn" offset=""> */}
            <MarvelInfo/>
            <StarwarsInfo/>
           <NatgeoInfo />
           <DisneyInfo/>
            <PixarInfo/>
            
            <BackgroundImage/>

            {/* </ScrollAnimation> */}
            
            
        {/* <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/background.mp4" type="video/mp4" />
        </video> */}
            
        </Container>
    )
}

export default Info


const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
    overflow-x:hidden;
    height: 100vh;
    
    

`
const BackgroundImage = styled.div`
     height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: fixed;
  top: 72px;
  right: 0;
  left: 0;
  z-index: -1;
 
`
