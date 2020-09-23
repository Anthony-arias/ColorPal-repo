import React from "react";
import styled from "styled-components";

export default (props) => {
  const { colorHex, colorIdx, onClick } = props;

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

  const LockButton = styled.button`
    background: rgba(255, 255, 255, 0.3);
    top: 200px;
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid white;
    color: white;
    text-shadow: 1px 1px black;
    height: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  `;
  return (
    <div>
      <Label>#{colorHex}</Label>
      <LockButton>lock</LockButton>
    </div>
  );
};
