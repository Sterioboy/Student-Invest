import "../../App.css";
import React from "react";
import {
  Button,
  Form
} from "react-bootstrap";

function SignIn() {
  return (
    <Form className="w-50 mx-auto my-3">
      <h3>Sign In</h3>
      <Form.Group className="mb-3" controlId="signUpEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signUpPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
