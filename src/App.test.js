import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the App component and finds the main heading", () => {
  render(<App />);

  // Find the hero section with role="banner"
  const banner = screen.getByRole("banner");
  const headingElement = within(banner).getByRole("heading", {
    name: /Little Lemon/i,
  });

  expect(headingElement).toBeInTheDocument();
});
