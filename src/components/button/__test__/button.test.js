import { render, screen } from "@testing-library/react";
import App from "../../../App";

test("Renders Button component", () => {
  render(<App />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
