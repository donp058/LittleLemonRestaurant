import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import ReservationForm from "./ReservationForm";

test("Renders the ReservationForm heading", () => {
  render(
    <Router>
      <ReservationForm />
    </Router>
  );
  const headingElement = screen.getByText(/Reservation Date:/i); // Update to match exact text
  expect(headingElement).toBeInTheDocument();
});
