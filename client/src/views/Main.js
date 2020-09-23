import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";

export default () => {
  //setting a state when the button is clicked and passing that to the palette-
  //component will cause useEffect to fire again.
  //not sure if this is the best way to go about it, but it works.
  //also the api is pretty slow on it's own so give it some time after clicking the button
  const [generate, setGenerate] = useState(false);

  //removed position: fixed; to stop other elements from clipping into the header
  const Header = styled.header`
    width: 100%;
    height: 70px;

    background-color: #ffffff;

    padding: 40px 0 25px 0;
    justify-content: center;
    box-shadow: 0 1px 8px #a0acad;
  `;

  const Button = styled.button`
    background: #93bedf;
    margin-top: 30px;
    border-radius: 6px;
    border: 1px solid white;
    color: #404e5c;
    padding: 0.25em 1em;
    height: 40px;
    font-family: sans-serif;
    font-weight: 525;
    font-size: 16px;
  `;

  const onClick = (e) => {
    generate ? setGenerate(false) : setGenerate(true);
    console.log("generate button is clicked");
  };

  return (
    <div>
      <Header>
        <Button onClick={onClick}>GENERATE</Button>
      </Header>
      {/* <Palette generate={generate} /> */}
    </div>
  );
};
