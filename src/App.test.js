import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title Taskbox", () => {
  render(<App />);
  const titleElement = screen.getByText(/Taskbox/i);
  expect(titleElement).toBeInTheDocument();
});
