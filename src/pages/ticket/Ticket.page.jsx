/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tickets from "../../assests/data/dummy-tickets.json";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";

const ticket = Tickets[0];
export const Ticket = () => {
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setMsg(value);
  };
  const handleOnSubmit = () => {
    alert("Ticket submitted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="status">Status: {ticket.status}</div>
          <div className="date">Ticket opened: {ticket.addedAt} </div>
        </Col>
        <Col>
          <Button variant="outline-info" className="text-right ">
            {" "}
            Close Ticket
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <MessageHistory msg={ticket.history}></MessageHistory>
        </Col>
      </Row>
      <Row>
        <Col>
          <UpdateTicket
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            msg={msg}
          />
        </Col>
      </Row>
    </Container>
  );
};
