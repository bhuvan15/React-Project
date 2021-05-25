import React from 'react'
import styled from "styled-components"
import "../disneyInfo.css"

function DisneyInfo() {
    return (
        <Container>

          <div className="jumbotron container" style={{backgroundImage:"linear-gradient(to bottom right, rgb(16, 114, 121),rgb(2, 69, 78))"}}>
          
       <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>

         
         
             
              <Info>
                    <ul>
                      <li>Exclusive Disney Content</li>
                      <li>All Animated Movies and Shows</li>
                      <li>Disney Kids Also Included</li>
                      <li>Movies include "Ratatouille","The Incredibles", "Zootopia"</li>
                      <li>Non-Animated movies include "Alladin", "Maleficient", "Pirates of the Carrabean"</li>
                    </ul>
              </Info>
               <Wrap>

        < img src="/images/viewers-disney.png" alt="" />
        {/* <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
 */}
      </Wrap>
           
        </div>
   </Container>
    )
}

export default DisneyInfo

const Container = styled.div`
      margin-top: -300px;
      height: 100vh;
      padding: 30px;
        `
const Wrap = styled.div`
  border-radius: 10px;
  height: 200px;
  width: 300px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    object-fit: cover;
  }


  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }

`

const Info = styled.div`
    font-size: 18px;
    
    ul {
            li {
              margin-top: 7px;
              line-height : 35px;
            }
    }
`



