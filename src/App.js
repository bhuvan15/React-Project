import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Detail from "./Components/Detail"
import Info from "./Components/Info"
import OriginalsPage from "./Components/OriginalsPage"
import Series from "./Components/Series"
import Movies from "./Components/Movies"
import Search from "./Components/Search"

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
     <Router>
            <Header/>
            <Switch>
               <Route path="/home" exact >
                <Home/>
              </Route>
              <Route path="/login">
                <Login/>
                </Route>
              <Route path="/detail/:id">
                <Detail/>
              </Route>
               <Route path="/info">
                <Info/>
                </Route>
                <Route path="/originalsPage">
                  <OriginalsPage/>
                  </Route>
                  <Route path="/series">
                    <Series/>
                  </Route>
                  <Route path="/Movies">
                    <Movies/>
                  </Route>
                  <Route path="/search">
                    <Search/>
                  </Route>
              
          
            </Switch>
        </Router>
  );
       
}

export default App;
