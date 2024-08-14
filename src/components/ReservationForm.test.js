// Mock the global fetchAPI function
global.fetchAPI = jest.fn(() => [
  { time: "4:00 P.M.", available: true },
  { time: "5:00 P.M.", available: true },
  { time: "6:00 P.M.", available: true },
]);

import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ReservationForm from "./ReservationForm";

test("renders the ReservationForm heading", () => {
  act(() => {
    render(
      <Router>
        <ReservationForm
          availableTimes={{}}
          dispatch={jest.fn()}
          setReservationDetails={jest.fn()}
        />
      </Router>
    );
  });

  const headingElement = screen.getByText(/available seating times/i);
  expect(headingElement).toBeInTheDocument();
});

test("submits the ReservationForm", async () => {
  await act(async () => {
    render(
      <Router>
        <ReservationForm
          availableTimes={{}}
          dispatch={jest.fn()}
          setReservationDetails={jest.fn()}
        />
      </Router>
    );

    const availableTimes = fetchAPI(new Date());
    expect(Array.isArray(availableTimes)).toBe(true);
    expect(availableTimes.length).toBeGreaterThan(0);

    fireEvent.change(screen.getByPlaceholderText(/click for date/i), {
      target: { value: "2024-07-28" },
    });
    fireEvent.change(screen.getByLabelText(/patrons/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Anniversary" },
    });
    fireEvent.change(screen.getByLabelText(/special requests/i), {
      target: { value: "Near window" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /proceed with reservation/i })
    );

    expect(window.alert).not.toHaveBeenCalled();
  });
});
