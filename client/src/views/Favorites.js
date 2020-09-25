import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import ColorSwatch from "../components/ColorSwatch";
import axios from "axios";

export default (props) => {
  let currentUser = props.currentUser.userID;
  let [allUserPalettes, setAllUserPalettes] = useState([])
  const [bgMode, setBgMode] = useState("bg-light");
  const [buttonMode, setButtonMode] = useState("b-light");
  const [swatchMode, setSwatchMode] = useState("sw-light");
  // add loaded useState

  // allUserPalettes contain an array of objects
  // one object contains the name of the palette the user entered...
  // with five of the hex codes labeld hexValue1, hexValue2, ect..
  // see the browsers console for more info
    // more info below
  useEffect(() => {
    axios.get("http://localhost:8000/api/"+currentUser+"/palettes").then((response) => {
      allUserPalettes = response.data;
      console.log(response.data)
      //console.log(allUserPalettes)
      //setLoaded(true) here
    })
      .catch(error => {console.log(error)})
  }, []);

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
    //use allUserPalettes.map() to get the info to load
    //like we've done before 
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
