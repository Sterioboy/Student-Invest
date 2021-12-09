import "../../App.css";
import React, { useRef } from "react";
import {
  Button,
  Form
} from "react-bootstrap";
import { thunkSignInAC } from "../../store/actions";
import { useDispatch } from "react-redux";
import signin from './signin.scss'

function SignIn() {
  const formEl = useRef();
  const dispatch = useDispatch();

  return (
   <div className='signinDiv'>
    <div className="signinForm">
    <Form ref={formEl} className="w-50 mx-auto my-3" onSubmit={(e) => dispatch(thunkSignInAC(e, formEl))}>
      <h3>Sign In</h3>
      <Form.Group className="mb-3" controlId="signInEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signInPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default SignIn;
