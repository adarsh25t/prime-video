import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { firebaseContext } from "./store/context";
import firebase from "./firebase/Config";
import ViewMovie from "./store/movieContext";
import WatchList from "./store/watchListContext";
import NavContext from "./store/navbarContext";

ReactDOM.render(
  <firebaseContext.Provider value={{ firebase }}>
    <Context>
      <ViewMovie>
        <WatchList>
          <NavContext>
            <App />
          </NavContext>
        </WatchList>
      </ViewMovie>
    </Context>
  </firebaseContext.Provider>,
  document.getElementById("root")
);
