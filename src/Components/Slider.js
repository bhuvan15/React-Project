import React , {useState, useEffect} from 'react'
import styled from "styled-components"
/* import axios from "./axios"
import requests from "./Requests" */


function Slider() {
/* 
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1 )
        ]
      );
      return request;
    }

   fetchData();
  }, []);

  console.log(movie); */

    return (
         <div>
             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
   <ol className="carousel-indicators">
     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" ></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
   </ol>
   <div className="carousel-inner">
     <div className="carousel-item active">
           <Wrap>
              <img  className="d-block w-100" src="/images/GOT.png" alt="" />
              </Wrap>
     </div>
     <div className="carousel-item">
           <Wrap>
              <img  className="d-block w-100" src="/images/Lucifer.png" alt="" />
              </Wrap>
     </div>
     <div className="carousel-item ">
           <Wrap>
              <img  className="d-block w-100" src="/images/Thor.jpg" alt="" />
              
              </Wrap>
     </div>
     <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/Joker.png" alt="" />
         </Wrap>
     </div>
       <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/slider-scale.jpg" alt="" />
         </Wrap>
     </div>
        <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/Chernobyl.png" alt="" />
         </Wrap>
     </div>
      <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/Jedi.png" alt="" />
         </Wrap>
     </div>
      <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/Spider.png" alt="" />
         </Wrap>
     </div>
      <div className="carousel-item">
         <Wrap>
              <img  className="d-block w-100" src="/images/star-wars.png" alt="" />
         </Wrap>
     </div>
     
     
     
     
   </div>
   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
   </a>
   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>
   </a>
 </div>
         </div>
    )
}

export default Slider

const Wrap = styled.div`
    cursor:pointer;

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }

    }

`
