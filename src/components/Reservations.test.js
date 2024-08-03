import { render, screen } from "@testing-library/react";
import Reservations from "./Reservations";
import { BrowserRouter as Router } from "react-router-dom";

const mockAvailableTimes = {
  "2024-07-28": [
    { time: "4:00 P.M.", booked: false },
    { time: "4:30 P.M.", booked: false },
    { time: "5:00 P.M.", booked: true }, // Example of a booked slot
  ],
};

test("renders Reservations component with static text", () => {
  render(
    <Router>
      <Reservations
        availableTimes={mockAvailableTimes}
        dispatch={jest.fn()}
        setReservationDetails={jest.fn()}
      />
    </Router>
  );

  const staticTextElement = screen.getByText(/available seating times/i);
  expect(staticTextElement).toBeInTheDocument();
});

test("renders available times correctly", () => {
  render(
    <Router>
      <Reservations
        availableTimes={mockAvailableTimes}
        dispatch={jest.fn()}
        setReservationDetails={jest.fn()}
      />
    </Router>
  );

  // Check that all expected times are rendered
  const timeSlots = ["4:00 P.M.", "4:30 P.M.", "5:00 P.M."];

  timeSlots.forEach((time) => {
    const timeElement = screen.getByLabelText(time);
    expect(timeElement).toBeInTheDocument();
  });

  // Check that the booked slot is correctly marked as booked
  const bookedSlot = screen.getByLabelText("5:00 P.M.");
  expect(bookedSlot).toBeDisabled();
});

test("renders the reservation form", () => {
  render(
    <Router>
      <Reservations
        availableTimes={mockAvailableTimes}
        dispatch={jest.fn()}
        setReservationDetails={jest.fn()}
      />
    </Router>
  );

  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();
});
