import "@testing-library/jest-dom/extend-expect";
import {
  getAllByTestId,
  getByRole,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";
import { mockCars, mockColors, mockManufacturers } from "../utils/mockData";

const server = setupServer(
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/cars",
    (req, res, ctx) => {
      return res(ctx.json(mockCars));
    }
  ),
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/colors",
    (req, res, ctx) => {
      return res(ctx.json(mockColors));
    }
  ),
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/manufacturers",
    (req, res, ctx) => {
      return res(ctx.json(mockManufacturers));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays results", async () => {
  render(<App />);

  const main = screen.getByRole("main");

  expect(
    getByRole(main, "heading", { name: /available cars/i })
  ).toBeInTheDocument();

  await waitFor(() =>
    getByRole(main, "heading", {
      name: /showing 10 of 1000 results/i,
    })
  );

  expect(
    getByRole(main, "heading", { name: /Mercedes-Benz CLC-Klasse/i })
  ).toBeInTheDocument();

  const list = getByTestId(main, "car-list");

  expect(getAllByTestId(list, "car").length).toBe(10);
});
