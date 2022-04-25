import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "James" },
    }),
  },
}));

test("User name input element should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("Username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});

test("Username input value should change on update", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "Test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test("Password input element should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("Password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("Password input value should change on update", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "Test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("Button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  expect(buttonEl).toBeInTheDocument();
});

test("Button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  expect(buttonEl).toBeDisabled();
});

test("Loading messaged should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  expect(buttonEl).not.toHaveTextContent("Loading...");
});

test("Error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("Button should not be disabled if username and password value are present", () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);

  const testValue = "Test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("Loading message should be rendered on click", () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);

  const testValue = "Test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent("Loading...");
});

test("Loading message should not be visible after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);

  const testValue = "Test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent("Loading..."));
});

test("Username should be visible after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByTestId("button");
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);

  const testValue = "Test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const user = await screen.findByText(/james/i);

  expect(user).toBeInTheDocument();
});
