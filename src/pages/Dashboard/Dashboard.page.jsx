/* eslint-disable no-undef */
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../assests/data/dummy-tickets.json"
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
        <PageBreadcrumb page="Dashboard"></PageBreadcrumb>
        </Col>
      </Row>


      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: </div>
          <div>Pending tickets: </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
