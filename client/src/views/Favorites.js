import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import ColorSwatch from "../components/ColorSwatch";
import axios from "axios";

export default (props) => {
  let currentUser = props.currentUser.userID;
  let [allUserPalettes, setAllUserPalettes] = useState([]);
  const [bgMode, setBgMode] = useState("bg-light");
  const [buttonMode, setButtonMode] = useState("b-light");
  const [loaded, setLoaded] = useState(false);
  // add loaded useState

  // allUserPalettes contain an array of objects
  // one object contains the name of the palette the user entered...
  // with five of the hex codes labeled hexValue1, hexValue2, ect..
  // see the browsers console for more info
  // more info below
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/" + currentUser + "/palettes")
      .then((response) => {
        setAllUserPalettes((allUserPalettes = response.data));
        // allUserPalettes = response.data;
        // console.log(response.data[0]);
        console.log(allUserPalettes);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const PalTitle = styled.h4`
    font-family: "Varela Round";
    text-align: left;
    margin-left: 200px;
    margin-bottom: 0;
    margin-top: 30px;
  `;

  const Swatches = styled.div`
    margin: auto;
    width: 70%;
    border-radius: 10px;
    padding: 20px 0px;
    display: flex;
    overflow-wrap: anywhere;
    justify-content: space-between;
  `;

  const toggleMode = (e) => {
    if (bgMode === "bg-light") {
      setBgMode("bg-dark");
      setButtonMode("b-dark");
    } else {
      setBgMode("bg-light");
      setButtonMode("b-light");
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
      {loaded && (
        <div>
          {allUserPalettes.map((color, index) => (
            <div>
              <PalTitle>Name: {color.paletteName}</PalTitle>
              <Swatches className={buttonMode}>
                <ColorSwatch colorHex={color.hexValue1} />
                <ColorSwatch colorHex={color.hexValue2} />
                <ColorSwatch colorHex={color.hexValue3} />
                <ColorSwatch colorHex={color.hexValue4} />
                <ColorSwatch colorHex={color.hexValue5} />
              </Swatches>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
