/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Row, Col, Container } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { Validation } from "../../utils/Validation";

const initialFrmdata = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFrmdataErr = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = ({ page }) => {
  const [frmdata, setFrmdata] = useState(initialFrmdata);
  const [frmdataErr, setFrmdataErr] = useState(initialFrmdataErr);

  useEffect(() => {}, [frmdataErr]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isSubjectValid = Validation(frmdata.subject);
    setFrmdataErr({ ...initialFrmdataErr, subject: !isSubjectValid });
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmdata={frmdata}
            frmdataErr={frmdataErr}
          ></AddTicketForm>
        </Col>
      </Row>
    </Container>
  );
};
