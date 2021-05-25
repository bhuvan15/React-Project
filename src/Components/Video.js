/* import React from 'react'
import styled from "styled-components"
import {Redirect} from "react-router-dom"

 class Video extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/login" />
      : <Player>
           <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
          </Player>
          
  }
}

export default Video

const Player = styled.div`
margin-left: -100px;
padding: -100px;
height: 100vh;
width: 110vw;
overflow: hidden;
z-index: 5;
position: relative;
video {
  z-index: 5;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    margin:0;
    padding:0;

}
` */