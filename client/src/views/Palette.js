import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import update from "react-addons-update";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random/?format=json";

export default (props) => {
  // each hex value is now directly stored in the array, use currentColors[index] to get value
  let [currentColors, setCurrentColors] = useState([]);
  let [loaded, setLoaded] = useState(false);

  const [isHiddenOne, setIsHiddenOne] = useState(true);
  const [isHiddenTwo, setIsHiddenTwo] = useState(true);
  const [isHiddenThree, setIsHiddentThree] = useState(true);
  const [isHiddenFour, setIsHiddenFour] = useState(true);
  const [isHiddenFive, setIsHiddenFive] = useState(true);

  const lockText = "lock";

  let [lockedColors, setLockedColors] = useState([]);
  const [colorsClassName, setColorsClassName] = useState([]);

  const lockColorHandler = (index) => {
    //lockedColors[index] = currentColors[index];
    if (lockedColors[index]) lockedColors[index] = undefined;
    else lockedColors[index] = currentColors[index];
  };

  const setUpColumnAnimation = () => {
    setColorsClassName(
      update(colorsClassName, {
        [0]: {
          $apply: function () {
            if (lockedColors[0]) return "Column-style";
            else return "Column-style Column-animate";
          },
        },
        [1]: {
          $apply: function () {
            if (lockedColors[1]) return "Column-style";
            else return "Column-style Column-animate";
          },
        },
        [2]: {
          $apply: function () {
            if (lockedColors[2]) return "Column-style";
            else return "Column-style Column-animate";
          },
        },
        [3]: {
          $apply: function () {
            if (lockedColors[3]) return "Column-style";
            else return "Column-style Column-animate";
          },
        },
        [4]: {
          $apply: function () {
            if (lockedColors[4]) return "Column-style";
            else return "Column-style Column-animate";
          },
        },
      })
    );
  };
  const mouseEnterfunction = useCallback((event) => {
    event(false);
  });

  // the api is pretty slow, nothing to do on our part
  useEffect(() => {
    axios.get(proxyurl + url).then((response) => {
      setCurrentColors((currentColors = response.data[0].colors));
      setUpColumnAnimation();
      setLoaded(true);
    });
  }, [props.generate]);

  const setUpLocked = () => {
    for (var i in currentColors) {
      if (lockedColors[i] && currentColors[i] != "") {
        currentColors[i] = lockedColors[i];
      }
    }
  };
  //moved styling to app.css
  return (
    <div>
      {loaded && (
        <div>
          {setUpLocked()}

          <div
            className={colorsClassName[0]}
            onAnimationStart={(e) => {
              console.log("animation start");
              e.target.removeEventListener("mouseenter", () =>
                mouseEnterfunction(setIsHiddenOne)
              );
            }}
            onAnimationEnd={(e) => {
              setColorsClassName(
                update(colorsClassName, {
                  [0]: { $set: "Column-style" },
                })
              );
              e.target.addEventListener("mouseenter", () =>
                mouseEnterfunction(setIsHiddenOne)
              );
            }}
            onMouseLeave={() => setIsHiddenOne(true)}
            style={{ backgroundColor: "#" + currentColors[0] }}
          >
            <div hidden={isHiddenOne}>
              <p className="label">#{currentColors[0]}</p>
              {lockedColors[0] ? (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(0);
                  }}
                >
                  unlock
                </button>
              ) : (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(0);
                  }}
                >
                  lock
                </button>
              )}
            </div>
          </div>
          <div
            className={colorsClassName[1]}
            onAnimationEnd={(e) => {
              setColorsClassName(
                update(colorsClassName, {
                  [1]: { $set: "Column-style" },
                })
              );
              e.target.addEventListener("mouseenter", () =>
                setIsHiddenTwo(false)
              );
            }}
            onMouseLeave={() => setIsHiddenTwo(true)}
            style={{ backgroundColor: "#" + currentColors[1] }}
          >
            <div hidden={isHiddenTwo}>
              <p className="label">#{currentColors[1]}</p>
              {lockedColors[1] ? (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(1);
                  }}
                >
                  unlock
                </button>
              ) : (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(1);
                  }}
                >
                  lock
                </button>
              )}
            </div>
          </div>
          <div
            className={colorsClassName[2]}
            onAnimationEnd={(e) => {
              setColorsClassName(
                update(colorsClassName, {
                  [2]: { $set: "Column-style" },
                })
              );
              e.target.addEventListener("mouseenter", () =>
                setIsHiddentThree(false)
              );
            }}
            onMouseLeave={() => setIsHiddentThree(true)}
            style={{ backgroundColor: "#" + currentColors[2] }}
          >
            <div hidden={isHiddenThree}>
              <p className="label">#{currentColors[2]}</p>
              {lockedColors[2] ? (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(2);
                  }}
                >
                  unlock
                </button>
              ) : (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(2);
                  }}
                >
                  lock
                </button>
              )}
            </div>
          </div>
          <div
            className={colorsClassName[3]}
            onAnimationEnd={(e) => {
              setColorsClassName(
                update(colorsClassName, {
                  [3]: { $set: "Column-style" },
                })
              );
              e.target.addEventListener("mouseenter", () =>
                setIsHiddenFour(false)
              );
            }}
            onMouseLeave={() => setIsHiddenFour(true)}
            style={{ backgroundColor: "#" + currentColors[3] }}
          >
            <div hidden={isHiddenFour}>
              <p className="label">#{currentColors[3]}</p>
              {lockedColors[3] ? (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(3);
                  }}
                >
                  unlock
                </button>
              ) : (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(3);
                  }}
                >
                  lock
                </button>
              )}
            </div>
          </div>
          <div
            className={colorsClassName[4]}
            onAnimationEnd={(e) => {
              setColorsClassName(
                update(colorsClassName, {
                  [4]: { $set: "Column-style" },
                })
              );
              e.target.addEventListener("mouseenter", () =>
                setIsHiddenFive(false)
              );
            }}
            onMouseLeave={() => setIsHiddenFive(true)}
            style={{ backgroundColor: "#" + currentColors[4] }}
          >
            <div hidden={isHiddenFive}>
              <p className="label">#{currentColors[4]}</p>
              {lockedColors[4] ? (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(4);
                  }}
                >
                  unlock
                </button>
              ) : (
                <button
                  className="LockButton"
                  onClick={() => {
                    lockColorHandler(4);
                  }}
                >
                  lock
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
