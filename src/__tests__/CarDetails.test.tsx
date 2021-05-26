import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import React from "react";
import App from "../App";
import { handlers } from "../utils/server-handlers";
import { getByRole, render, screen } from "../utils/test-utils";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("CarDetails", async () => {
  render(<App />);

  const cars = await screen.findAllByTestId("car");

  userEvent.click(getByRole(cars[0], "link"));

  await screen.findByRole("heading", {
    name: /bmw 5er/i,
  });

  expect(screen.getByTestId("car-details-cover")).toHaveAttribute(
    "style",
    "background-image: url(https://auto1-js-task-api--mufasa71.repl.co/images/car.svg);"
  );

  expect(
    screen.getByText(/stock #84797 - 199\.956 km - diesel - black/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      /this car is currently available and can be delivered as soon as tomorrow morning\. please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions\./i
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      /if you like this car, click the button and save it in your collection of favourite items\./i
    )
  ).toBeInTheDocument();

  // save to local storage
  userEvent.click(
    screen.getByRole("button", {
      name: /save/i,
    })
  );

  expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();

  expect(
    screen.getByText(
      /this car is saved in your collection of favourite items\./i
    )
  ).toBeInTheDocument();

  // remove from local storage
  userEvent.click(screen.getByRole("button", { name: /remove/i }));

  expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();

  expect(
    screen.getByText(
      /if you like this car, click the button and save it in your collection of favourite items\./i
    )
  ).toBeInTheDocument();
});
