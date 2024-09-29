/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export const Login = ({
  handleOnChange,
  handleOnSubmit,
  email,
  password,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center"> Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={email}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  value={password}
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>
              <Button type="Submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forget Password
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
