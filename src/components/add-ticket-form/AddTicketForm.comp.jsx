/* eslint-disable react/prop-types */
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import "./add-ticket-form.style.css";
import PropTypes from "prop-types";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmdata,
  frmdataErr,
}) => {
  return (
    <Jumbotron className="mt-3 add-new-ticket ">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              maxLength="100"
              onChange={handleOnChange}
              value={frmdata.subject}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmdataErr.subject && "Subject is invalid! Please enter"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmdata.issue}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            minLength="5"
            maxLength="100"
            value={frmdata.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmdata: PropTypes.object.isRequired,
  frmdataErr: PropTypes.object.isRequired,
};
