import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random/?format=json";

export default (props) => {
  // each hex value is now directly stored in the array, use currentColors[index] to get value
  let [currentColors, setCurrentColors] = useState([]);
  let [loaded, setLoaded] = useState(false);

  const [isShownOne, setIsShownOne] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
  const [isShownFour, setIsShownFour] = useState(false);
  const [isShownFive, setIsShownFive] = useState(false);

  let [lockedColors, setLockedColors] = useState([]);

  const lockColorHandler = (index) => {
    //lockedColors[index] = currentColors[index];
    for (var i in currentColors) {
      if (lockedColors) {
        currentColors[i] = lockedColors[i];
      }
    }
  };

  // the api is pretty slow, nothing to do on our part
  useEffect(() => {
    axios.get(proxyurl + url).then((response) => {
      setCurrentColors((currentColors = response.data[0].colors));
      console.log(response.data[0].colors);
      setLoaded(true);
    });
  }, [props.generate]);

  /* styles start */
  const Container = styled.div`
    width: 100%;
  `;

  //this part of the code will likely fire before the hex values are set...
  // so setting the background-color from the colors array will likely result in a undefined value.
  const Column = styled.div`
    display: inline-block;
    height: 550px;
    width: 20%;
  `;

  const Label = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    position: fixed;
    top: 300px;
    justify-self: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 8px;
  `;

  // const colorButton = styled.button`
  //   background: rgba(255, 255, 255, 0.3);
  //   position: fixed;
  //   top: 500px;
  //   border-radius: 6px;
  //   border: 1px solid white;
  //   color: white;
  //   text-shadow: 1px 1px black;
  //   padding: 0.25em 1em;
  //   height: 20px;
  //   font-family: sans-serif;
  // `;
  /* styles end */

  return (
    <div>
      <Container>
        {loaded && (
          <div>
            <Column
              onMouseEnter={() => setIsShownOne(true)}
              onMouseLeave={() => setIsShownOne(false)}
              style={{ backgroundColor: "#" + currentColors[0] }}
            >
              {isShownOne && <Label>#{currentColors[0]}</Label>}
            </Column>
            <Column
              onMouseEnter={() => setIsShownTwo(true)}
              onMouseLeave={() => setIsShownTwo(false)}
              style={{ backgroundColor: "#" + currentColors[1] }}
            >
              {isShownTwo && <Label>#{currentColors[1]}</Label>}
            </Column>
            <Column
              onMouseEnter={() => setIsShownThree(true)}
              onMouseLeave={() => setIsShownThree(false)}
              style={{ backgroundColor: "#" + currentColors[2] }}
            >
              {isShownThree && <Label>#{currentColors[2]}</Label>}
            </Column>
            <Column
              onMouseEnter={() => setIsShownFour(true)}
              onMouseLeave={() => setIsShownFour(false)}
              style={{ backgroundColor: "#" + currentColors[3] }}
            >
              {isShownFour && <Label>#{currentColors[3]}</Label>}
            </Column>
            <Column
              onMouseEnter={() => setIsShownFive(true)}
              onMouseLeave={() => setIsShownFive(false)}
              style={{ backgroundColor: "#" + currentColors[4] }}
            >
              {isShownFive && <Label>#{currentColors[4]}</Label>}
            </Column>
          </div>
        )}
      </Container>
    </div>
  );
};
