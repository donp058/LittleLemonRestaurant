import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react";

beforeAll(() => {
  // Mock the window.alert method
  window.alert = jest.fn();
});

test("renders the ReservationForm heading", () => {
  render(
    <Router>
      <ReservationForm />
    </Router>
  );
  const headingElement = screen.getByText(/available seating times/i);
  expect(headingElement).toBeInTheDocument();
});

test("submits the ReservationForm", async () => {
  render(
    <Router>
      <ReservationForm />
    </Router>
  );

  // Fill out the form
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

  // Submit the form
  await act(async () => {
    fireEvent.click(
      screen.getByRole("button", { name: /proceed with reservation/i })
    );
  });

  // Check if form submission is handled
  expect(window.alert).toHaveBeenCalledWith(
    "Please interact with all required fields."
  );
});
