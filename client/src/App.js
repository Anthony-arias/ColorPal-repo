import React from "react";
import "./App.css";
import Main from "./views/Main";
import Register from "./components/UserForm";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
