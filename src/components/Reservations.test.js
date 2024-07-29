import { render, screen } from "@testing-library/react";
import Reservations from "./Reservations";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Reservations component with static text", () => {
  render(
    <Router>
      <Reservations
        availableTimes={{}}
        dispatch={jest.fn()}
        setReservationDetails={jest.fn()}
      />
    </Router>
  );
  const staticTextElement = screen.getByText(/available seating times/i);
  expect(staticTextElement).toBeInTheDocument();
});
