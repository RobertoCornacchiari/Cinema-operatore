import React, { useReducer, useContext, useEffect, useState } from "react";
import "./style.scss";
import { Schermata } from "./components.js";

const { GETData, postData } = require("./fetch.js");

const AppContext = React.createContext(null);

export function App() {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Schermata contesto={AppContext} />
    </AppContext.Provider>
  );
}

function reducer(state, action) {
    let newState = { ...state };
    switch (action.type) {
      default:
        break;
    }
    console.log("stato", newState);
    return newState;
  }
  
