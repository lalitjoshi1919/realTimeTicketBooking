import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assests/data/dummy-tickets.json";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { Link } from "react-router-dom";

export const TicketListing = () => {
  const [str, setStr] = useState("");
  const [ticketFound, setTicketFound] = useState(tickets);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (str) => {
    if (str.length > 0) {
      const dispTicket = tickets.filter((ticket) =>
        ticket.subject.toLowerCase().includes(str.toLowerCase())
      );
      console.log(dispTicket);
      setTicketFound(dispTicket);
    } else {
      setTicketFound(tickets);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to ="/addticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={ticketFound} />
        </Col>
      </Row>
    </Container>
  );
};
