import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import ColorSwatch from "../components/ColorSwatch";

export default () => {
  const [bgMode, setBgMode] = useState("bg-light");
  const [buttonMode, setButtonMode] = useState("b-light");
  const [swatchMode, setSwatchMode] = useState("sw-light");

  //removed position: fixed; to stop other elements from clipping into the header
  //   const Header = styled.header`
  //     width: 100%;
  //     height: 100px;
  //     padding: 40px 0 30px 0;
  //     justify-content: center;
  //   `;

  const Button = styled.button`
    margin-top: 5px;
    border-radius: 6px;
    margin-left: 20px;
    padding: 0.25em 1em;
    height: 40px;
    font-weight: 525;
    font-size: 16px;
  `;

  const Swatches = styled.div`
    margin: auto;
    margin-top: 100px;
    width: 70%;
    border-radius: 10px;
    padding: 40px 0px;
  `;

  const colors = [];
  // colors should be array of the hex codes of the saved colors

  const toggleMode = (e) => {
    if (bgMode === "bg-light") {
      setBgMode("bg-dark");
      setButtonMode("b-dark");
      setSwatchMode("sw-dark");
    } else {
      setBgMode("bg-light");
      setButtonMode("b-light");
      setSwatchMode("sw-light");
    }
  };

  return (
    <div id={bgMode}>
      <h1 className={buttonMode} id="favetitle">
        Favorites
      </h1>
      <Link to="/">
        <Button className={buttonMode} id="logreg">
          new palette
        </Button>
      </Link>
      <Button className={buttonMode} id="mode" onClick={toggleMode}>
        {String.fromCharCode(9728)}
      </Button>
      <Swatches className={buttonMode}>
        <ColorSwatch id={swatchMode} colors={colors}></ColorSwatch>
      </Swatches>
    </div>
  );
};
