import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";


function Recommends() {

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {/* {movie.id} */}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
                <h5>{movie.title}</h5>
                <span>{truncate(movie.subTitle,40)}</span>
                <p>{truncate(movie.description,120)}</p>
                
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  h4{
    letter-spacing: 4px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  /* padding-top: 56.25%; */
  height: 250px;
  width: 325px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    margin: 0px;
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


  h5 {
    z-index: 4;
    color: #fff;
    position: absolute;
    top: 40px;
    left: 10px;
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0s;
    
    
  }
  span {
      z-index: 4;
    color: #fff;
    position: absolute;
    top: 105px;
    left: 10px;
    font-size: 14px;
    opacity:0;
    transition: opacity 0.4s ease-in-out 0s;
    
}
p{
   z-index: 4;
    color: #fff;
    position: absolute;
    bottom: 30px;
    left: 10px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0s;
}


  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    img {
      opacity: 0.2;
    }
    p {
      opacity: 1;
    }
    span {
      opacity : 1;
    }
    h5 {
      opacity : 1;
    }
  }
`;

export default Recommends;