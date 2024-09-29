/* eslint-disable react/prop-types */
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = ({handleOnChange ,str}) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control onChange={handleOnChange} name="searchStr" value={str} placeholder="Search ..." />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
