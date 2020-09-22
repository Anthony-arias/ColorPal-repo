import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random";
var XMLParser = require("react-xml-parser");

export default () => {
  let [colors, setColors] = useState([]);

  useEffect(() => {
    axios.get(proxyurl + url).then((response) => {
      let obj = new XMLParser().parseFromString(response.data);
      setColors((colors = obj.children[0].children[9].children));
      console.log(colors);
    });
  }, []);

  /* styles start */
  const Container = styled.div`
    width: 100%;
  `;

  const Column = styled.div`
    height: 1000px;
    width: 20%;
    background-color: #f7af9d;
  `;

  //   const Label = styled.p`
  //     font-family: Verdana, Geneva, Tahoma, sans-serif;
  //     position: fixed;
  //     top: 500px;
  //     align-self: center;
  //   `;

  /* styles end */

  /*const setInitialColors = () => {
    setColorOne(getRandomColor());
    setColorTwo(getRandomColor());
    setColorThree(getRandomColor());
    setColorFour(getRandomColor());
    setColorFive(getRandomColor());
  };*/
  return (
    <div>
      <Container>
        <Column></Column>
      </Container>
    </div>
  );
};
