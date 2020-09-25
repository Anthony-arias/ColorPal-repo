import React from "react";
import "./App.css";
import Main from "./views/Main";
import Register from "./components/UserForm";
import { Router } from "@reach/router";
import Favorites from "./views/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Register path="/register" />
        <Favorites path="/faves" />
      </Router>
    </div>
  );
}

export default App;
