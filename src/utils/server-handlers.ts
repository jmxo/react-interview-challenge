import { rest } from "msw";
import * as mockData from "./mock-data";

const handlers = [
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/cars",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const page = String(query.get("page"));
      const color = query.get("color");
      const manufacturer = query.get("manufacturer");

      if (color === "white" && manufacturer === "") {
        return res(ctx.json(mockData.mockCarsOnlyWhite));
      }

      if (manufacturer === "audi" && color === "") {
        return res(ctx.json(mockData.mockCarsOnlyAudi));
      }

      if (manufacturer === "bmw" && color === "black" && page === "1") {
        return res(ctx.json(mockData.mockCarsBlackBMW));
      }

      if (manufacturer === "bmw" && color === "black" && page === "2") {
        return res(ctx.json(mockData.mockCarsBlackBMWPage2));
      }

      if (color === "" && manufacturer === "" && page === "2") {
        return res(ctx.json(mockData.mockCarsPage2));
      }

      // color "", manufacturer "", page 1
      return res(ctx.json(mockData.mockCarsPage1));
    }
  ),
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/colors",
    (req, res, ctx) => {
      return res(ctx.json(mockData.mockColors));
    }
  ),
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/manufacturers",
    (req, res, ctx) => {
      return res(ctx.json(mockData.mockManufacturers));
    }
  ),
  rest.get(
    "https://auto1-mock-server.herokuapp.com/api/cars/84797",
    (req, res, ctx) => {
      return res(ctx.json(mockData.mockCarResponse));
    }
  ),
];

export { handlers };
