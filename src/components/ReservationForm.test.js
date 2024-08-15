import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ReservationForm from "./ReservationForm";

global.fetchAPI = jest.fn(() => [
  { time: "4:00 P.M.", available: true },
  { time: "5:00 P.M.", available: true },
  { time: "6:00 P.M.", available: true },
]);

global.submitAPI = jest.fn(() => true);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("submits the ReservationForm", async () => {
  await act(async () => {
    const { container } = render(
      <Router>
        <ReservationForm
          availableTimes={{
            "2024-08-14": [
              { time: "4:00 P.M.", available: true },
              { time: "5:00 P.M.", available: true },
              { time: "6:00 P.M.", available: true },
            ],
          }}
          dispatch={jest.fn()}
          setReservationDetails={jest.fn()}
        />
      </Router>
    );

    console.log(container.innerHTML);

    // Interact with all required fields
    fireEvent.change(screen.getByTestId("patrons-select"), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByRole("combobox", { name: /Occasion/i }), {
      target: { value: "Anniversary" },
    });

    fireEvent.change(
      screen.getByRole("textbox", { name: /Special Requests/i }),
      {
        target: { value: "Near window" },
      }
    );

    fireEvent.click(screen.getByLabelText("4:00 P.M."));

    fireEvent.click(
      screen.getByRole("button", { name: /Proceed With Reservation/i })
    );

    // Validate that the API was called
    expect(submitAPI).toHaveBeenCalledTimes(1);
    expect(submitAPI).toHaveReturnedWith(true);
  });
});
