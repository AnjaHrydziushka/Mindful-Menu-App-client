import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth/actions';
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";

export default function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signup(email, password));
        console.log("Email:", email, "Password:", password);
        
        setEmail("")
        setPassword("")
        history.push("/login")
    }
    return (
        <div>
           <Container>
        <Form as={Col} md={{ span: 6, offset: 3}} className="mt-5">
          <h1 className="mt-5 mb-5">Signup</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            />
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign up
            </Button>
          </Form.Group>
          <Link to="/login" style={{ textAlign: "center" }}>
            Already have an account? Log in!
          </Link>

        </Form>
      </Container>
        </div>
    )
}
