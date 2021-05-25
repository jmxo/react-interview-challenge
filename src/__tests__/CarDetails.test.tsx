import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import React from "react";
import App from "../App";
import { handlers } from "../utils/server-handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Show the details of a selected car", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByTestId("car"));
  const cars = screen.getAllByTestId("car");

  fireEvent.click(getByRole(cars[0], "link"));

  await waitFor(() => screen.getByRole(/main/i));

  await waitFor(() =>
    screen.getByRole("heading", {
      name: /bmw 5er/i,
    })
  );

  expect(screen.getByTestId("car-details-cover")).toBeInTheDocument();
  expect(screen.getByTestId("car-details-cover")).toHaveAttribute(
    "style",
    "background-image: url(https://auto1-js-task-api--mufasa71.repl.co/images/car.svg);"
  );

  expect(
    screen.getByRole("heading", {
      name: /stock #84797 - 199\.956 km - diesel - black/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      /this car is currently available and can be delivered as soon as tomorrow morning\. please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions\./i
    )
  ).toMatchInlineSnapshot(`
    <p
      class="MuiTypography-root MuiTypography-body1"
    >
      This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
    </p>
  `);

  expect(
    screen.getByText(
      /if you like this car, click the button and save it in your collection of favourite items\./i
    )
  ).toMatchInlineSnapshot(`
    <p
      class="MuiTypography-root MuiTypography-body1"
    >
      If you like this car, click the button and save it in your
                    collection of favourite items.
    </p>
  `);

  expect(
    screen.getByRole("button", {
      name: /save/i,
    })
  ).toBeInTheDocument();
});
