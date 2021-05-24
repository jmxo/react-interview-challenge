import { rest } from "msw";
import { mockCars, mockColors, mockManufacturers } from "./mockData";

const handlers = [
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
  ),
];

export { handlers };
