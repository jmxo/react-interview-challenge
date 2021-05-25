import { rest } from "msw";
import {
  mockCarResponse,
  mockCarsOnlyAudi,
  mockCarsOnlyWhite,
  mockCarsPage1Response,
  mockCarsPage2Response,
  mockColors,
  mockManufacturers,
} from "./mockData";

const handlers = [
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/cars",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const page = query.get("page");
      const color = query.get("color");
      const manufacturer = query.get("manufacturer");

      if (color === "white") {
        return res(ctx.json(mockCarsOnlyWhite));
      }

      if (manufacturer === "audi") {
        return res(ctx.json(mockCarsOnlyAudi));
      }

      if (String(page) === "2") {
        return res(ctx.json(mockCarsPage2Response));
      }

      return res(ctx.json(mockCarsPage1Response));
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
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/cars/84797",
    (req, res, ctx) => {
      return res(ctx.json(mockCarResponse));
    }
  ),
];

export { handlers };
