// import './App.css';
// import { Action } from "redux";
import React from 'react'
// import { Reducer } from "react";

// import { Provider} from "react-redux";
// import store from "./Store/Store";
import Home from './Home';
import Nav from './Store/Nav';
import AboutClass from './Store/AboutClass'

// import { useSelector } from 'react-redux';

function App() {
    // const lang = useSelector((state)=>state.lang);
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <Nav />
        <Home />
        <AboutClass />
      {/* </Provider> */}
    </div>
  );
}

export default App;
