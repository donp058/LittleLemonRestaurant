import { initializeTimes, timesReducer } from "./App";

// Mock the global fetchAPI function
global.fetchAPI = jest.fn((date) => {
  console.log("fetchAPI called with date:", date);
  return [
    { time: "4:00 P.M.", available: true },
    { time: "5:00 P.M.", available: true },
    { time: "6:00 P.M.", available: true },
  ];
});

describe("App Component Tests", () => {
  test("initializeTimes calls fetchAPI and returns available times", () => {
    const times = initializeTimes();
    console.log("Times returned from initializeTimes:", times);
    const expectedDate = new Date().toISOString().split("T")[0];
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(times).toEqual({
      [expectedDate]: [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    });
  });

  test("timesReducer handles SET_DATE action correctly", () => {
    const initialState = {};
    const action = { type: "SET_DATE", payload: "2024-08-14" };

    const expectedState = {
      "2024-08-14": [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    };
    const newState = timesReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
