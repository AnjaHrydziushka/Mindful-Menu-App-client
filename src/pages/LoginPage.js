import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth/actions';
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";
import { selectToken } from '../store/auth/selectors';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  console.log("TOKEN", token)

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
    
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3}} className="mt-5">
          <h1 className="mt-5 mb-5">Login</h1>
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
              Log in
            </Button>
          </Form.Group>
          <Link to="/signup" style={{ textAlign: "center" }}>
            Click here to sign up
          </Link>

        </Form>
      </Container>
    </div>
  );
}