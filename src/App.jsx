import { Entry } from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layouts/DefaultLayout";
import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketListing } from "./pages/ticket-list/TicketListing";
import { Ticket } from "./pages/ticket/Ticket.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                element={
                  <DefaultLayout>
                    <Dashboard />
                  </DefaultLayout>
                }
              />
            }
          />

          <Route
            path="/addTicket"
            element={
              <PrivateRoute
                element={
                  <DefaultLayout>
                    <AddTicket />
                  </DefaultLayout>
                }
              />
            }
          />

          <Route
            path="/tickets"
            element={
              <PrivateRoute
                element={
                  <DefaultLayout>
                    <TicketListing />
                  </DefaultLayout>
                }
              />
            }
          />

          <Route
            path="/dashboard/ticket/:tId"
            element={
              <PrivateRoute
                element={
                  <DefaultLayout>
                    <Ticket />
                  </DefaultLayout>
                }
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
