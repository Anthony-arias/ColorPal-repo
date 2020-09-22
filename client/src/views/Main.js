import React from "react";
import styled from "styled-components";
import Palette from "./Palette";

export default () => {
  const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    background-color: #f5f1e3;
    position: fixed;
    margin-top: -24px;
    padding: 40px 0 25px 0;
    justify-content: center;
    box-shadow: 0 1px 8px #a0acad;
  `;

  const Button = styled.button`
    background: #93bedf;
    margin-top: 30px;
    border-radius: 6px;
    border: 1px solid white;
    color: #404e5c;
    padding: 0.25em 1em;
    height: 40px;
    font-family: sans-serif;
    font-weight: 525;
    font-size: 16px;
  `;

  const onClick = (e) => {
    console.log("button clicked");
  };

  return (
    <div>
      <Header>
        <Button onClick={onClick}>GENERATE</Button>
      </Header>
      <Palette />
    </div>
  );
};
