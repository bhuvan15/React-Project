/* import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import ReactPlayer from "react-player"
import db from "../firebase"
import {useParams} from "react-router-dom"

function VideoPlayer() {
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
          Hello World
            <ReactPlayer controls url = {detailData.trailer} style={{zIndex:4}}/>
        Hello world
        <img src={detailData.backgroundImg} alt="" />
      </Container>
       
    );
}

export default VideoPlayer

const Container = styled.div`
padding: 30px;
color: white;
height: 500px;
width: 500px;
margin-top: 72px;
`

 */