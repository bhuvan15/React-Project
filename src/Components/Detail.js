 import React , {useEffect ,useState} from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components"
import db from "../firebase"

import ReactPlayer from "react-player"
import "./detail.css"

function addClassName() {
        const player = document.querySelector(".player");
        player.setAttribute("id","active");

        const backgrounds = document.querySelectorAll(".inactive");
        backgrounds.forEach((background) => {
            background.setAttribute("id","inactive");
                })
}

function removeId() {
        const player = document.querySelector(".player");
        player.removeAttribute("id");

        const backgrounds = document.querySelectorAll(".inactive");
        backgrounds.forEach((background) => {
            background.removeAttribute("id");
                })
}


function Detail() {
    const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies").doc(id).get().then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } 
      })
  }, [id]);



    return (
        <Container>
           <Background>
                <img src={detailData.backgroundImg} className="inactive"/>
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} className="inactive"/>
            </ImageTitle>
            <Controls>
                <button type="button" className="btn btn-primary inactive" style={{margin:"10px"}}>
                    <img src="/images/play-icon-white.png"/>
                    <span>Play</span></button>
                <button onClick = {addClassName}  type="button" className="btn btn-danger inactive" id="trailer" style={{margin:"10px"}}>
               <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
            
                    </button>
                   

               <button type="button" className="btn btn-info inactive" style={{margin:"10px",fontSize:"24px"}}>+</button>
               <button type="button" className="btn btn-info inactive" style={{margin:"10px",fontSize:"24px"}}><img src="/images/group-icon.png" alt="" /></button>
            </Controls>
            <SubTitle>
                <div className="inactive">
                    {detailData.subTitle}
                </div>
                
            </SubTitle>
            <Description>
                <div className="inactive">
                    {detailData.description}
                </div>
              
            </Description>
          
            <div className="player">
                <div className="video">
                        <ReactPlayer controls url = {detailData.trailer} width=" 800px" height="450px"/>
                </div>
                <div className="btn">
                     <button  type="button" onClick={removeId}  className="btn btn-danger" style={{padding:"15px 25px"}}>
                         Close Trailer
                     </button>
                    </div>
                
            </div>
           
        </Container>
    )
 }

export default Detail

const Container = styled.div`
    height: 90vh;
    width: 90vw;
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw +  5px); 
    position: relative;
    margin-top:50px;
    overflow: hidden;
    

`

const Background = styled.div`
    position: fixed;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`

const ImageTitle = styled.div`
     width: 25vw;
     min-height: 170px;
     min-width: 200px; 
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top:26px;
    min-height:20px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`
  

const Player = styled.div`
  

`