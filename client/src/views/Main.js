import React, { useState } from "react";
import styled from "styled-components";
import Palette from "./Palette";
import { Link, navigate} from "@reach/router";
import axios from "axios";

export default (props) => {
  const [generate, setGenerate] = useState(false);
  const [mode, setMode] = useState("light");
  const [buttonMode, setButtonMode] = useState("b-light");
  const [backGround, setBackGround] = useState("");
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [paletteName, setPaletteName] = useState("");
  let currentPalette = [];

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

  const handleSaveButton = () => {
    setBackGround("addBlur");
    setIsFormHidden(false);
  }

  const handleCancelButton = () =>{
    setIsFormHidden(true);
    setBackGround("");
  }

  const handleCurrentPalette = (palette) => {
    currentPalette = palette;
  }

  const handlePaletteSubmition = () => {
    axios
      .post("http://localhost:8000/api/palette/new", {
        paletteName: paletteName,
        hexValue1: currentPalette[0],
        hexValue2: currentPalette[1],
        hexValue3: currentPalette[2],
        hexValue4: currentPalette[3],
        hexValue5: currentPalette[4],
        owner: props.currentUser.userID
      })
      .then(handleCancelButton())
      .catch(function (error) {
        console.log(error);
      });
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
      <div hidden={isFormHidden} className="foreGround">
         <label>Name the Palette:</label> <br/>
         <input type="text" onChange={e => {setPaletteName(e.target.value)}}></input> <br/>
         <button className="foreGround-Button" onClick={handleCancelButton}>Cancel</button><button onClick={handlePaletteSubmition} className="foreGround-Button">Save</button>
      </div>
       <div className={backGround}>
      <Header id={mode}>
        <Button className={buttonMode} onClick={handleGenerate}>
          new palette
        </Button>
        
        {
           props.currentUser.userID ?
           <Button className={buttonMode} onClick={handleSaveButton}>save palette</Button>:
           <Button className={buttonMode} onClick={() => navigate("/register")}>save palette</Button>
        }
        {
           props.currentUser.userID ?<Button className={buttonMode} onClick={() => navigate("/faves")}>favorites</Button>:
           <Button className={buttonMode} onClick={() => navigate("/register")}>favorites</Button>
        }
         {
            props.currentUser.userID?
            <Button onClick={props.handleLogout} className={buttonMode} id="logreg">Log Out</Button>:
            <Button onClick={() => navigate("/register")} className={buttonMode} id="logreg">Login/Register</Button>
          }
        

        <Button className={buttonMode} id="mode" onClick={toggleMode}>
          {String.fromCharCode(9728)}
        </Button>
      </Header>
      <Palette generate={generate} handleCurrentPalette={handleCurrentPalette}/>
    </div>
    </div>
  );
};
