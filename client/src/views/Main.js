import React from "react";
import styled from "styled-components";

export default () => {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    height: 40px;
  `;

  return (
    <div>
      <h1>Loading</h1>
      <Button>Button</Button>
    </div>
  );
};
