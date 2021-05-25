import React from 'react'
import styled from "styled-components"
import Slider from "./Slider"
import Viewers from "./Viewers"
import Recommends from "./Recommends"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Trending from "./Trending"
import {useEffect} from "react"
import {useDispatch , useSelector} from "react-redux"
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice"
import {selectUserName} from "../features/User/userSlice"


function Home() {

   const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  let movies = [];
  let series = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
          switch (doc.data().series) {
          case "yes":
            series = [...series, { id: doc.id, ...doc.data() }];
            break;

          case "no":
            movies = [...movies, { id: doc.id, ...doc.data() }];
            break;
          }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
          serie : series,
         movie : movies
        })
      );
    });
  }, [userName]);
  




    return (
        <Container>
            <Slider/>
            <Viewers/>
            <Recommends/>
            <Originals/>
            <NewDisney/>
            
            <Trending/>
           {/*  <BackgroundImage/> */}
        </Container>
    )
}

export default Home



const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  margin-top: 72px;
  padding: 0 calc(3.5vw + 5px);
  
`

/* const BackgroundImage = styled.div`
     height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/home-background.png");
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`
 */