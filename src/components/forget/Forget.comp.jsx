/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export const ForgetPage = ({
  handleOnChange,
  handleOnResetSubmit,
  email,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Forget Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
              <Button type="Submit">Reset Password</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ForgetPage.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
