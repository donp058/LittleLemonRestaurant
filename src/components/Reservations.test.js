// Manually define the global fetchAPI function for the tests
global.fetchAPI = jest.fn(() => [
  { time: "4:00 P.M.", available: true },
  { time: "5:00 P.M.", available: true },
  { time: "6:00 P.M.", available: true },
]);

import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Reservations from "./Reservations";

const mockAvailableTimes = {
  "2024-07-28": [
    { time: "4:00 P.M.", available: true },
    { time: "5:00 P.M.", available: true },
    { time: "6:00 P.M.", available: true },
  ],
};

test("renders Reservations component with static text", () => {
  act(() => {
    render(
      <Router>
        <Reservations
          availableTimes={mockAvailableTimes}
          dispatch={jest.fn()}
          setReservationDetails={jest.fn()}
        />
      </Router>
    );
  });

  const staticTextElement = screen.getByText(/available seating times/i);
  expect(staticTextElement).toBeInTheDocument();
});
