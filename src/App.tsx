import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import landingView from "./view/landing/landingView";

function App() {
  return (
    <div className="App">
      <landingView />
    </div>
  );
}

export default App;
