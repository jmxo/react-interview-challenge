import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import React from "react";
import App from "../App";
import { handlers } from "../utils/server-handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches all cars on load", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /available cars/i })
  ).toBeInTheDocument();

  await waitFor(() => screen.getAllByTestId("car"));
});

test("only shows 10 items per page", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByTestId("car"));

  expect(screen.getAllByTestId("car").length).toBe(10);
});

test("can fetch more pages", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByTestId("car"));

  expect(screen.getByText(/bmw 5er/i)).toBeInTheDocument();
  expect(screen.getByText(/page 1 of 100/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: /next/i }));
  await waitFor(() => screen.getByText(/page 2 of 100/i));
  await waitForElementToBeRemoved(screen.getByText(/bmw 5er/i));
  await waitFor(() => screen.getByText(/tesla model s/i));

  userEvent.click(screen.getByRole("button", { name: /previous/i }));
  await waitFor(() => screen.getByText(/page 1 of 100/i));
  await waitFor(() => screen.getByText(/bmw 5er/i));
});

test("can filter by color", async () => {
  render(<App />);

  fireEvent.mouseDown(
    screen.getByRole("button", {
      name: /color all car colors/i,
    })
  );

  fireEvent.click(screen.getByText(/white/i));

  expect(
    screen.getByRole("button", { name: /color white/i })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: /filter/i }));

  // this means the server returned the correct ?color=white response
  await waitFor(() => screen.getByText(/fiat albea/i));
});

test("can filter by manufacturer", async () => {
  render(<App />);

  fireEvent.mouseDown(
    screen.getByRole("button", {
      name: /manufacturer all manufacturers/i,
    })
  );

  fireEvent.click(screen.getByText(/audi/i));

  expect(
    screen.getByRole("button", { name: /manufacturer audi/i })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: /filter/i }));

  // this means the server returned the correct ?manufacturer=audi response
  await waitFor(() => screen.getByText(/audi/i));
});
