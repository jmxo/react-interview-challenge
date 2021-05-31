import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import React from "react";
import { Route } from "react-router-dom";
import CarSearch from "../screens/CarSearch";
import { handlers } from "../utils/server-handlers";
import { render, screen, waitForElementToBeRemoved } from "../utils/test-utils";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("can fetch results in pages", async () => {
  render(<CarSearch />);

  expect(
    screen.getByRole("heading", { name: /available cars/i })
  ).toBeInTheDocument();

  // shows 10 results
  let cars = await screen.findAllByTestId("car");
  expect(
    screen.getByRole("heading", { name: /showing 10 of 1000 results/i })
  ).toBeInTheDocument();
  expect(cars).toHaveLength(10);
  expect(screen.getByText(/page 1 of 100/i)).toBeInTheDocument();

  // the data from the mocked response for page 1
  expect(cars[0]).toHaveTextContent(/bmw 5er/i);

  // pagination: click next
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  await screen.findByText(/page 2 of 100/i);
  await waitForElementToBeRemoved(screen.getByText(/bmw 5er/i));

  // shows data from the mocked response for page 2
  cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/tesla model s/i);

  // click previous
  userEvent.click(screen.getByRole("button", { name: /previous/i }));
  await screen.findByText(/page 1 of 100/i);
  cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/bmw 5er/i);
}, 10000);

test("can filter by color", async () => {
  let location = { search: "" };
  render(
    <>
      <CarSearch />
      <Route
        path="*"
        render={({ location: routeLocation }) => {
          location = routeLocation;
          return null;
        }}
      />
    </>
  );

  const colorDropownButton = screen.getByRole("button", {
    name: /color/i,
  });

  // pick black
  userEvent.click(colorDropownButton);
  userEvent.click(screen.getByRole("option", { name: /black/i }));
  expect(colorDropownButton).toHaveTextContent(/black/i);

  // pick white
  userEvent.click(colorDropownButton);
  userEvent.click(screen.getByRole("option", { name: /white/i }));
  expect(colorDropownButton).toHaveTextContent(/white/i);

  // click filter
  userEvent.click(screen.getByRole("button", { name: /filter/i }));
  expect(location?.search).toMatch(/color=white/i);

  // should show the mocked server response for ?color=white
  await screen.findByRole("heading", { name: /fiat albea/i });
  const cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/fiat albea/i);
}, 10000);

test("can filter by manufacturer", async () => {
  let location = { search: "" };
  render(
    <>
      <CarSearch />
      <Route
        path="*"
        render={({ location: routeLocation }) => {
          location = routeLocation;
          return null;
        }}
      />
    </>
  );

  const manufacturerDropownButton = screen.getByRole("button", {
    name: /manufacturer/i,
  });
  userEvent.click(manufacturerDropownButton);

  // pick bmw
  userEvent.click(manufacturerDropownButton);
  userEvent.click(screen.getByRole("option", { name: /bmw/i }));
  expect(manufacturerDropownButton).toHaveTextContent(/bmw/i);

  // pick audi
  userEvent.click(manufacturerDropownButton);
  userEvent.click(screen.getByRole("option", { name: /audi/i }));
  expect(manufacturerDropownButton).toHaveTextContent(/audi/i);

  // click filter
  userEvent.click(screen.getByRole("button", { name: /filter/i }));
  expect(location.search).toMatch(/manufacturer=audi/i);

  // should show the mocked server response for ?manufacturer=audi
  await screen.findByRole("heading", { name: /audi v8/i });
  const cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/audi v8/i);
}, 10000);

test("can filter by color+manufacturer+page", async () => {
  let location = { search: "" };
  render(
    <>
      <CarSearch />
      <Route
        path="*"
        render={({ location: routeLocation }) => {
          location = routeLocation;
          return null;
        }}
      />
    </>
  );

  const colorDropownButton = screen.getByRole("button", {
    name: /color/i,
  });

  const manufacturerDropownButton = screen.getByRole("button", {
    name: /manufacturer/i,
  });

  // pick black
  userEvent.click(colorDropownButton);
  userEvent.click(screen.getByRole("option", { name: /black/i }));

  // pick bmw
  userEvent.click(manufacturerDropownButton);
  userEvent.click(screen.getByRole("option", { name: /bmw/i }));

  // click filter
  userEvent.click(screen.getByRole("button", { name: /filter/i }));
  expect(location.search).toMatch(/color=black/i);
  expect(location.search).toMatch(/manufacturer=bmw/i);

  // should show the mocked server response for ?manufacturer=audi&color=black
  await screen.findByRole("heading", { name: /bmw x3/i });
  let cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/bmw 6er/i);

  // page 2
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  expect(location.search).toMatch(/page=2/i);
  expect(location.search).toMatch(/color=black/i);
  expect(location.search).toMatch(/manufacturer=bmw/i);
  await screen.findByText(/page 2/i);

  // should show the mocked server response for ?manufacturer=audi&color=black&page=2
  await screen.findByRole("heading", { name: /bmw 2er/i });
  cars = await screen.findAllByTestId("car");
  expect(cars[0]).toHaveTextContent(/bmw 2er/i);
}, 10000);
