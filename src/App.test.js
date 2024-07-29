import { render, screen, within } from "@testing-library/react";
import App, { initializeTimes, timesReducer } from "./App";
import { availableTimes as initialAvailableTimes } from "./components/ReservationsAvailable";

// Helper function to get a valid date from availableTimes
const getValidDate = () => Object.keys(initialAvailableTimes)[0];

// Existing test to verify rendering of the main heading
test("renders the App component and finds the main heading", () => {
  render(<App />);

  // Find the hero section with role="banner"
  const banner = screen.getByRole("banner");
  const headingElement = within(banner).getByRole("heading", {
    name: /Little Lemon/i,
  });

  expect(headingElement).toBeInTheDocument();
});

// New test for initializeTimes function
test("initializeTimes returns the initial times", () => {
  expect(initializeTimes(initialAvailableTimes)).toEqual(initialAvailableTimes);
});

// New test for timesReducer function with SET_DATE action
test("timesReducer handles SET_DATE action correctly", () => {
  const initialState = initialAvailableTimes;
  const validDate = getValidDate();
  const action = { type: "SET_DATE", payload: { date: validDate } };
  const newState = timesReducer(initialState, action);
  expect(newState).toEqual(initialState);
});

// New test for timesReducer function with UPDATE_SLOT action
test("timesReducer handles UPDATE_SLOT action correctly", () => {
  const initialState = initialAvailableTimes;
  const validDate = getValidDate();
  const action = {
    type: "UPDATE_SLOT",
    payload: {
      date: validDate,
      time: "4:00 P.M.",
      update: {
        booked: true,
        reservationFName: "John",
        reservationLName: "Doe",
      },
    },
  };

  const expectedState = {
    ...initialState,
    [validDate]: initialState[validDate].map((slot) =>
      slot.time === "4:00 P.M."
        ? {
            ...slot,
            booked: true,
            reservationFName: "John",
            reservationLName: "Doe",
          }
        : slot
    ),
  };

  const newState = timesReducer(initialState, action);
  expect(newState).toEqual(expectedState);
});
