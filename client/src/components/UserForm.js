import React, { useState, Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "../App.css";


export default (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("in submit handler");
    axios
      .post("http://localhost:8000/api/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPW,
      })
      .then(navigate("/"))
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    console.log("in submit handler");
    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then(navigate("/"))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="user-page">
      <Link to="/">
        <Button id="home">Home</Button>
      </Link>
      <h2 id="regtitle">Register</h2>
      <div id="forms">
        <Container id="regform">
          <Form className="form" onSubmit={handleRegister}>
            <Col>
              <FormGroup>
                <Label className="labels">First Name</Label>
                <Input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="labels">Last Name</Label>
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="myemail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input
                  type="password"
                  placeholder="********"
                  onChange={(e) => setConfirmPW(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
        {/* log form start */}
        <h2 id="logtitle">Sign In</h2>
        <Container id="logform">
          <Form className="form" onSubmit={handleSignin}>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="myemail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Button>Sign In</Button>
          </Form>
        </Container>
      </div>
      <div id="bump">
        <p>.</p>
      </div>
    </div>
  );
};
