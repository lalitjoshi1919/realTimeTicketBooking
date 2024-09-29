import { Entry } from "./pages/entry/Entry.page";
import { Button } from "react-bootstrap"; // Assuming you're using react-bootstrap
import { DefaultLayout } from "./layouts/DefaultLayout";
import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketListing } from "./pages/ticket-list/TicketListing";
import { Ticket } from "./pages/ticket/Ticket.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />

          <Route path="/dashboard" element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          } />

          <Route path="/AddTicket" element={
            <DefaultLayout>
              <AddTicket />
            </DefaultLayout>
          } />

          <Route path="/TicketListing" element={
            <DefaultLayout>
              <TicketListing />
            </DefaultLayout>
          } />

          <Route path="/Ticket/:tid" element={
            <DefaultLayout>
              <Ticket />
            </DefaultLayout>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
