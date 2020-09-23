import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FadeIn from "react-fade-in";

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
    lockedColors[index] = currentColors[index];
  };

  // the api is pretty slow, nothing to do on our part
  useEffect(() => {
    console.log("in useEffect function");
    axios.get(proxyurl + url).then((response) => {
      console.log("calling api");
      setCurrentColors((currentColors = response.data[0].colors));
      console.log(response.data[0].colors);
      setLoaded(true);
    });
  }, [props.generate]);

  //if the lockedColors index matches the index of the currentColors array,and there is a value there it will...
  //replace the value in that index
  const setUpLocked = () => {
    for (var i in currentColors) {
      if (lockedColors[i] && currentColors[i] != "") {
        currentColors[i] = lockedColors[i];
      }
    }
  };

  /* styles start */
  const Container = styled.div`
    width: 100%;
  `;

  const Column = styled.div`
    display: inline-block;
    height: 580px;
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

  //used position:fixed to keep the button from pushing out the columns
  // feel free to change or style how you want as long as the...
  // onClick fucntion stays the same
  const LockButton = styled.button`
    position: fixed;
    background: rgba(255, 255, 255, 0.3);
    position: fixed;
    top: 500px;
    border-radius: 6px;
    border: 1px solid white;
    color: white;
    text-shadow: 1px 1px black;
    padding: 0.25em 1em;
    height: 20px;
    font-family: sans-serif;
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
        <FadeIn delay="180">
          {loaded && (
            <div>
              {setUpLocked()}
              <Column
                onMouseEnter={() => setIsShownOne(true)}
                onMouseLeave={() => setIsShownOne(false)}
                style={{ backgroundColor: "#" + currentColors[0] }}
              >
                <LockButton
                  onClick={() => {
                    lockColorHandler(0);
                  }}
                >
                  lock
                </LockButton>
                {isShownOne && <Label>#{currentColors[0]}</Label>}
              </Column>
              <Column
                onMouseEnter={() => setIsShownTwo(true)}
                onMouseLeave={() => setIsShownTwo(false)}
                style={{ backgroundColor: "#" + currentColors[1] }}
              >
                <LockButton
                  onClick={() => {
                    lockColorHandler(1);
                  }}
                >
                  Testing lock Button
                </LockButton>

                {isShownTwo && <Label>#{currentColors[1]}</Label>}
              </Column>
              <Column
                onMouseEnter={() => setIsShownThree(true)}
                onMouseLeave={() => setIsShownThree(false)}
                style={{ backgroundColor: "#" + currentColors[2] }}
              >
                <LockButton
                  onClick={() => {
                    lockColorHandler(2);
                  }}
                >
                  Testing lock Button
                </LockButton>

                {isShownThree && <Label>#{currentColors[2]}</Label>}
              </Column>
              <Column
                onMouseEnter={() => setIsShownFour(true)}
                onMouseLeave={() => setIsShownFour(false)}
                style={{ backgroundColor: "#" + currentColors[3] }}
              >
                <LockButton
                  onClick={() => {
                    lockColorHandler(3);
                  }}
                >
                  Testing lock Button
                </LockButton>

                {isShownFour && <Label>#{currentColors[3]}</Label>}
              </Column>
              <Column
                onMouseEnter={() => setIsShownFive(true)}
                onMouseLeave={() => setIsShownFive(false)}
                style={{ backgroundColor: "#" + currentColors[4] }}
              >
                <LockButton
                  onClick={() => {
                    lockColorHandler(4);
                  }}
                >
                  Testing lock Button
                </LockButton>

                {isShownFive && <Label>#{currentColors[4]}</Label>}
              </Column>
            </div>
          )}
        </FadeIn>
      </Container>
    </div>
  );
};
