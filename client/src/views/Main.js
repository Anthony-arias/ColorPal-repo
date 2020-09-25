import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";
import { Link } from "@reach/router";

export default () => {
  const [generate, setGenerate] = useState(false);
  const [mode, setMode] = useState("light");
  const [buttonMode, setButtonMode] = useState("b-light");

  //removed position: fixed; to stop other elements from clipping into the header
  const Header = styled.header`
    width: 100%;
    height: 100px;
    padding: 40px 0 30px 0;
    justify-content: center;
  `;

  const Button = styled.button`
    margin-top: 5px;
    border-radius: 6px;
    margin-left: 20px;
    padding: 0.25em 1em;
    height: 40px;
    font-weight: 525;
    font-size: 16px;
  `;

  const handleGenerate = (e) => {
    generate ? setGenerate(false) : setGenerate(true);
    console.log("generate button is clicked");
  };

  const handleSavePalette = (e) => {
  }

  const handleFavorites = (e) => {
  }

  const toggleMode = (e) => {
    if (mode === "light") {
      setMode("dark");
      setButtonMode("b-dark");
    } else {
      setMode("light");
      setButtonMode("b-light");
    }
  };

  return (
    <div>
      <Header id={mode}>
        <Button className={buttonMode} onClick={handleGenerate}>
          new palette
        </Button>
        <Button className={buttonMode} onClick={handleSavePalette}>
          save palette
        </Button>
        <Link to="/faves">
          <Button className={buttonMode}>favorites</Button>
        </Link>

        <Link to="/register">
          <Button className={buttonMode} id="logreg">
            Login/Register
          </Button>
        </Link>
        <Button className={buttonMode} id="mode" onClick={toggleMode}>
          {String.fromCharCode(9728)}
        </Button>
      </Header>
      <Palette generate={generate} />
    </div>
  );
};
