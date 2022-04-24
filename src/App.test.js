import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders three list items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});

test("Renders title", () => {
  render(<App />);
  const spam = screen.getByTestId("spam");
  expect(spam).toBeInTheDocument();
});
