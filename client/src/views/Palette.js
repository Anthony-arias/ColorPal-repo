import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random";

//git push to anthony branch from remote
export default () => {
  /*let [colorOne, setColorOne] = useState({});
  let [colorTwo, setColorTwo] = useState({});
  let [colorThree, setColorThree] = useState({});
  let [colorFour, setColorFour] = useState({});
  let [colorFive, setColorFive] = useState({});*/

  useEffect(() => {
    axios.get(proxyurl + url).then((response) => {
      console.log(response.data);
    });
  }, []);

  /*const setInitialColors = () => {
    setColorOne(getRandomColor());
    setColorTwo(getRandomColor());
    setColorThree(getRandomColor());
    setColorFour(getRandomColor());
    setColorFive(getRandomColor());
  };*/
  return <div></div>;
};
