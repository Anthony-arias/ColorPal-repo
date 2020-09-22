import React from "react";
import styled from "styled-components";

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

  const Container = styled.div`
    width: 100%;
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

  const Column = styled.div`
    height: 1000px;
    width: 20%;
    background-color: #f7af9d;
    // background-color: #ff6b6c;
  `;

  //   const Label = styled.p`
  //     font-family: Verdana, Geneva, Tahoma, sans-serif;
  //     position: fixed;
  //     top: 500px;
  //     align-self: center;
  //   `;

  const onClick = (e) => {
    console.log("button clicked");
  };

  return (
    <div>
      <Header>
        <Button onClick={onClick}>GENERATE</Button>
      </Header>
      <Container>
        <Column></Column>
      </Container>
    </div>
  );
};
