import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from './components/NavBar'
import { authContext, firebaseContext } from "./store/context";
import BannerLogin from "./components/BannerLogin";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
import ViewMovie from "./pages/ViewMovie";


function App() {

 const {firebase} = useContext(firebaseContext);
 const {userName,setuserName} = useContext(authContext);
 
 useEffect(()=>{
  firebase.auth().onAuthStateChanged((user) => {
    setuserName(user);
  });
 },[])


  return (
    <div>
     <Router>
        <NavBar/>
        <Route exact path="/">
          {userName ? <Home /> : <BannerLogin/>}
        </Route>
        
        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/movie">
          <Movie/>
        </Route>

        <Route path="/tvshow">
           <TvShow/>
        </Route>

        <Route path="/viewmovie">
          <ViewMovie/>
        </Route>

      </Router>
  </div>
  );
}

export default App;
