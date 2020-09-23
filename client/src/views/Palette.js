import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import HoverDetails from "../components/HoverDetails";

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
  const [className, setClassName] = useState("Column-container");
  const [lockStatus, setLockStatus] = useState("unlocked");

  let [lockedColors, setLockedColors] = useState([]);

  const lockColorHandler = (index) => {
    lockedColors[index] = currentColors[index];
    if (lockStatus == "unlocked") {
      setLockStatus("locked");
    } else {
      setLockStatus("unlocked");
    }
  };

  // the api is pretty slow, nothing to do on our part
  useEffect(() => {
    axios.get(proxyurl + url).then((response) => {
      setCurrentColors((currentColors = response.data[0].colors));
      //console.log(response.data[0].colors);
      setLoaded(true);
      setClassName("Column-container");
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

  const Column = styled.div`
    display: inline-block;
    height: 580px;
    width: 20%;
  `;

  const Label = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    position: fixed;
    top: 530px;
    margin-left: 80px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 8px;
    font-size: 14px;
  `;

  //removing the position:fixed will fix the weird button animation
  const LockButton = styled.button`
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid white;
    color: white;
    text-shadow: 1px 1px black;
    height: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  `;

  /* styles end */

  /**/
  return (
    <div>
      {loaded && (
        <div>
          {setUpLocked()}

          <div
            className={className}
            onAnimationStart={() => console.log("animation started")}
            onAnimationEnd={() => {
              console.log("animation ended");
              setClassName("");
            }}
          >
            <Column
              id={lockStatus}
              onMouseEnter={() => setIsShownOne(true)}
              onMouseLeave={() => setIsShownOne(false)}
              style={{ backgroundColor: "#" + currentColors[0] }}
            >
              {isShownOne && (
                <div>
                  <Label>#{currentColors[0]}</Label>
                  <LockButton
                    onClick={() => {
                      lockColorHandler(0);
                    }}
                  >
                    lock
                  </LockButton>
                </div>
              )}
            </Column>
            <Column
              onMouseEnter={() => setIsShownTwo(true)}
              onMouseLeave={() => setIsShownTwo(false)}
              style={{ backgroundColor: "#" + currentColors[1] }}
            >
              {isShownTwo && (
                <div>
                  <Label>#{currentColors[1]}</Label>
                  <LockButton
                    onClick={() => {
                      lockColorHandler(1);
                    }}
                  >
                    lock
                  </LockButton>
                </div>
              )}
            </Column>
            <Column
              onMouseEnter={() => setIsShownThree(true)}
              onMouseLeave={() => setIsShownThree(false)}
              style={{ backgroundColor: "#" + currentColors[2] }}
            >
              {isShownThree && (
                <div>
                  <Label>#{currentColors[2]}</Label>
                  <LockButton
                    onClick={() => {
                      lockColorHandler(2);
                    }}
                  >
                    lock
                  </LockButton>
                </div>
              )}
            </Column>
            <Column
              onMouseEnter={() => setIsShownFour(true)}
              onMouseLeave={() => setIsShownFour(false)}
              style={{ backgroundColor: "#" + currentColors[3] }}
            >
              {isShownFour && (
                <div>
                  <Label>#{currentColors[3]}</Label>
                  <LockButton
                    onClick={() => {
                      lockColorHandler(3);
                    }}
                  >
                    lock
                  </LockButton>
                </div>
              )}
            </Column>
            <Column
              onMouseEnter={() => setIsShownFive(true)}
              onMouseLeave={() => setIsShownFive(false)}
              style={{ backgroundColor: "#" + currentColors[4] }}
            >
              {isShownFive && (
                <div>
                  <Label>#{currentColors[4]}</Label>
                  <LockButton
                    onClick={() => {
                      lockColorHandler(4);
                    }}
                  >
                    lock
                  </LockButton>
                </div>
              )}
            </Column>
          </div>
        </div>
      )}
    </div>
  );
};
