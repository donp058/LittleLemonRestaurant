// Mock the global fetchAPI function
global.fetchAPI = jest.fn(() => [
  { time: "4:00 P.M.", available: true },
  { time: "5:00 P.M.", available: true },
  { time: "6:00 P.M.", available: true },
]);

import { initializeTimes, timesReducer } from "./App";

describe("App Component Tests", () => {
  test("initializeTimes calls fetchAPI and returns available times", () => {
    const times = initializeTimes();
    console.log("Times returned from initializeTimes:", times); // Debugging line
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(times).toEqual([
      { time: "4:00 P.M.", available: true },
      { time: "5:00 P.M.", available: true },
      { time: "6:00 P.M.", available: true },
    ]);
  });

  test("timesReducer handles UPDATE_SLOT action correctly", () => {
    const initialState = {
      "2024-07-28": fetchAPI(new Date("2024-07-28")),
    };
    const validDate = "2024-07-28";
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
      [validDate]: [
        {
          time: "4:00 P.M.",
          available: true,
          booked: true,
          reservationFName: "John",
          reservationLName: "Doe",
        },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    };

    const newState = timesReducer(initialState, action);
    console.log("New state returned from timesReducer:", newState); // Debugging line
    expect(newState).toEqual(expectedState);
  });

  test("timesReducer handles SET_DATE action correctly", () => {
    const initialState = {};
    const validDate = "2024-07-28";
    const action = { type: "SET_DATE", payload: validDate };

    const expectedState = {
      [validDate]: [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    };

    const newState = timesReducer(initialState, action);
    console.log("New state after SET_DATE:", newState); // Debugging line
    expect(newState).toEqual(expectedState);
  });
});
