import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { firebaseContext } from './store/context';
import firebase from './firebase/Config'
import ViewMovie from './store/movieContext';

ReactDOM.render(
   <firebaseContext.Provider value={{firebase}}>
     <Context>
      <ViewMovie>
          <App/>
      </ViewMovie>
     </Context>
   </firebaseContext.Provider>,
  document.getElementById('root')
);

