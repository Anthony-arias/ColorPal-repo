import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";
import { Link } from "@reach/router";

export default () => {
  //setting a state when the button is clicked and passing that to the palette-
  //component will cause useEffect to fire again.
  //not sure if this is the best way to go about it, but it works.
  //also the api is pretty slow on it's own so give it some time after clicking the button
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

  const onClick = (e) => {
    generate ? setGenerate(false) : setGenerate(true);
    console.log("generate button is clicked");
  };

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
        <Button className={buttonMode} onClick={onClick}>
          new palette
        </Button>
        <Button className={buttonMode} onClick={onClick}>
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
