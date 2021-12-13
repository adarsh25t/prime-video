import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { authContext, firebaseContext } from "./store/context";


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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
      </Router>
  </div>
  );
}

export default App;
