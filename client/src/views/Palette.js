import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random";
var XMLParser = require('react-xml-parser');


export default () => {
    let [colors, setColors] = useState([])

  useEffect(() => {
      axios.get(proxyurl + url).then((response) => {
          let obj = new XMLParser().parseFromString(response.data);
          setColors(colors = obj.children[0].children[9].children);
          console.log(colors);
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
