import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";

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
    height: 40px;
    padding: 40px 0 25px 0;
    justify-content: center;
  `;

  const GenButton = styled.button`
    margin-top: 10px;
    border-radius: 6px;
    padding: 0.25em 1em;
    height: 40px;
    font-weight: 525;
    font-size: 16px;
  `;

  const ModeButton = styled.button`
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 6px;
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
        <GenButton className={buttonMode} onClick={onClick}>
          new palette
        </GenButton>
        <ModeButton className={buttonMode} onClick={toggleMode}>
          mode
        </ModeButton>
      </Header>
      <Palette generate={generate} />
    </div>
  );
};
