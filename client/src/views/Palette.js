import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.colourlovers.com/api/palettes/random/?format=json";

export default (props) => {
  // each hex value is now directly stored in the array, use currentColors[index] to get value
  let [currentColors, setCurrentColors] = useState([]);
  let [loaded, setLoaded] = useState(false);

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
  //style={{backgroundColor: "#"+colors[0].value}}
  /* styles end */

  return (
    <div>
      <Container>
        {loaded && (
          <div>
            <Column
              style={{ backgroundColor: "#" + currentColors[0] }}
            ></Column>
            <Column
              style={{ backgroundColor: "#" + currentColors[1] }}
            ></Column>
            <Column
              style={{ backgroundColor: "#" + currentColors[2] }}
            ></Column>
            <Column
              style={{ backgroundColor: "#" + currentColors[3] }}
            ></Column>
            <Column
              style={{ backgroundColor: "#" + currentColors[4] }}
            ></Column>
          </div>
        )}
      </Container>
    </div>
  );
};
