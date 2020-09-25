import React from "react";
import { Link, navigate } from "@reach/router";
import { Container } from "reactstrap";
import styled from "styled-components";
import "../App.css";

export default (props) => {
  const { colors } = props;
  // colors passed via props, then each code applied to the bg color in 'ColorBox'

  const ColorWrap = styled.div`
    width: 150px;
    height: 130px;
    background-color: white;
    padding-top: 5px;
    color: #404e5c;
    border-radius: 8px;
    display: inline-block;
    margin: 0px 15px 25px 15px;
  `;

  const ColorBox = styled.div`
    margin: auto;
    width: 140px;
    height: 100px;
    background-color: #f4a5ae;
    border-radius: 8px;
  `;

  const Label = styled.h3`
    color: #404e5c;
    font-family: "Varela Round";
    font-size: 14px;
    margin-top: 4px;
  `;
  return (
    <Container>
      <ColorWrap>
        <ColorBox></ColorBox>
        <Label>#(Hex code here)</Label>
      </ColorWrap>
    </Container>
  );
};
