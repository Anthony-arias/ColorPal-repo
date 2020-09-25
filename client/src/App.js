import React from "react";
import "./App.css";
import Main from "./views/Main";
import Register from "./components/UserForm";
import { Router, navigate } from "@reach/router";
import Favorites from "./views/Favorites";
import { useCookies } from "react-cookie";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser, removeCurrentUser] = useCookies(['userID']);

  const handleCurrentUser = (id) => {
    setCurrentUser('userID', id, { path: '/' });
  }

  const handleLogout  = () => {
    removeCurrentUser('userID');
    axios
      .post("http://localhost:8000/api/logout")
      .then(console.log("logged out"))
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Router>
        <Main path="/" currentUser={currentUser} handleLogout={handleLogout}/>
        <Register path="/register" handleCurrentUser={handleCurrentUser}/>
        <Favorites path="/faves" currentUser={currentUser} />
      </Router>
    </div>
  );
}

export default App;
