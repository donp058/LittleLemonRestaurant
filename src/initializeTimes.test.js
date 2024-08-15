// Add this at the top of your test file
import { initializeTimes, updateTimes } from "./App";

global.fetchAPI = jest.fn(() => [
  { time: "4:00 P.M.", available: true },
  { time: "5:00 P.M.", available: true },
  { time: "6:00 P.M.", available: true },
]);

describe("Booking Form API Tests", () => {
  test("returns non-empty array of available booking times", () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date
    const times = initializeTimes();
    expect(times).toEqual({
      [today]: [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    });
  });

  test("returns updated times based on selected date", () => {
    const initialState = {
      "2024-08-14": [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    };

    const action = {
      type: "SET_DATE",
      payload: "2024-08-15",
    };

    const updatedTimes = updateTimes(initialState, new Date(action.payload));
    expect(updatedTimes).toEqual({
      ...initialState,
      "2024-08-15": [
        { time: "4:00 P.M.", available: true },
        { time: "5:00 P.M.", available: true },
        { time: "6:00 P.M.", available: true },
      ],
    });
  });
});
