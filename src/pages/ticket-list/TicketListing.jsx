import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assests/data/dummy-tickets.json";
import { SearchForm } from "../../components/search-form/SearchForm.comp";

export const TicketListing = () => {
  const [str, setStr] = useState(""); // Search string state
  const [ticketFound, setTicketFound] = useState(tickets); // Filtered tickets state


  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);  // Update search string
    searchTicket(value);  // Call search function
  };

  const searchTicket = (str) => {
    if (str.length > 0) {
      // Filter tickets based on the search string
      const dispTicket = tickets.filter((ticket) =>
        ticket.subject.toLowerCase().includes(str.toLowerCase())
      );
      console.log(dispTicket); // Log filtered tickets for debugging
      setTicketFound(dispTicket); // Update state with filtered tickets
    } else {
      setTicketFound(tickets); // Reset to original tickets if search string is empty
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
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} /> {/* Pass state and handler */}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={ticketFound} /> {/* Pass the filtered tickets */}
        </Col>
      </Row>
    </Container>
  );
};
