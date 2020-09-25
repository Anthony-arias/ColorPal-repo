import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import "../App.css";

export default (props) => {
  const { colorHex } = props;
  // colors passed via props, then each code applied to the bg color in 'ColorBox'

  const ColorWrap = styled.div`
    width: 150px;
    height: 130px;
    background-color: white;
    padding-top: 5px;
    color: #404e5c;
    border-radius: 8px;
    margin: 0px 0px 25px 0px;
  `;

  const ColorBox = styled.div`
    margin: auto;
    width: 140px;
    height: 100px;
    border-radius: 8px;
    display: flex;
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
        <ColorBox style={{ backgroundColor: "#" + colorHex }}></ColorBox>
        <Label>#{colorHex}</Label>
      </ColorWrap>
    </Container>
  );
};
