import React , {useEffect , useState} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovie, selectSerie } from "../features/movie/movieSlice";
import "./Search.css"

function Search() {
    const movies = useSelector(selectMovie);
    const series = useSelector(selectSerie);

    function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

useEffect(()=> {
        
        const input = document.querySelector(".input");
        input.focus();

    },[])

    const [data , setData] = useState(null);  
    const [inputResult,inputValue] = useState(false);

   function getData(val) {
    setData(val.target.value);
    inputValue(false);
   }
     
    
   
    return (
        <Container>
            <h1>Search from our collection of Shows and Movies</h1>
            <Input>
            
            <input type="text" placeholder="Search here" className = "input" onChange={getData}/>
             <button className ="btn" onClick={()=>inputValue(true)}>Search</button>
            </Input>
            <Content>
                 {  
                       inputResult && movies.map((movie, key) => {
                       if(data === movie.title.toLowerCase()){
                         
                         return <Wrap key={key}>
                                <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                    <h5>{movie.title}</h5>
                                    <span>{truncate(movie.subTitle,40)}</span>
                                    <p>{truncate(movie.description,120)}</p>
                                </Link>
                            </Wrap>
                       }
                       
                        
                       })
                    

                }
                
               {  
                       inputResult && series.map((serie, key) => {
                           
                       if(data === serie.title.toLowerCase()){
                         
                         return <Wrap key={key}>
                                <Link to={`/detail/` + serie.id}>
                                    <img src={serie.cardImg} alt={serie.title} />
                                    <h5>{serie.title}</h5>
                                    <span>{truncate(serie.subTitle,40)}</span>
                                    <p>{truncate(serie.description,120)}</p>
                                </Link>
                            </Wrap>
                       }
                        
                       })
                    

                }
            </Content>
                   
               
              <BackgroundImage/>
            
        </Container>
        
    )
}

export default Search

const Container = styled.div`
overflow: hidden;
margin-top:72px;
padding: 20px;
h1 {
    text-align: center;
    margin-bottom: 50px;
}
`


const Input = styled.div`
     text-align:center;
     input{
         padding: 5px 14px;
         font-size: 35px;
         border-radius: 10px;
         border:none;
         margin:20px;
         text-transform: capitalize;

         &:focus {
             outline: none;
            
         }
     }
     button {
         margin-top: -18px;
         font-size: 28px;
         padding: 8px 16px ;
         border-radius: 10px;

         &:hover {
             cursor: pointer;
         }
         &:focus {
             outline:none;
         }
         &:active {
             transform: scale(0.98);
         }
     }

`
 const Content = styled.div`
position: relative;
  height: 320px;
  width:500px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  margin-top: 110px;
  h1{
      font-size: 72px;
      position: absolute;
      top: 500px;
      left: 500px;
      z-index: 5;

  }

` 
const Wrap = styled.div`
  height:100%;
  width:100%;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 6;
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
   h5 {
    z-index: 4;
    color: #fff;
    position: absolute;
    top: 40px;
    left: 10px;
    font-size: 32px;
    letter-spacing: 3px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0s;
    
    
  }
  span {
      z-index: 4;
    color: #fff;
    position: absolute;
    bottom: 160px;
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
    font-size: 18px;
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
`
const BackgroundImage = styled.div`
     height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/loki.jpg");
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
` 