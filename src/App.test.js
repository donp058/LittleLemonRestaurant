import { timesReducer, initializeTimes } from "./App";
import { fetchAPI } from "../api"; // Adjust the import based on your setup

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

const initialAvailableTimes = {
  "2024-07-28": [
    { time: "4:00 P.M.", booked: false },
    { time: "4:30 P.M.", booked: false },
    { time: "5:00 P.M.", booked: false },
  ],
};

const getValidDate = () => "2024-07-28";

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

test("initializeTimes calls fetchAPI and returns available times", () => {
  const mockAvailableTimes = [
    { time: "4:00 P.M.", available: true },
    { time: "4:30 P.M.", available: true },
  ];
  fetchAPI.mockReturnValue(mockAvailableTimes);

  const availableTimes = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled();
  expect(availableTimes).toEqual(mockAvailableTimes);
});
