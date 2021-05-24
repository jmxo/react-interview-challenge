import CarListItem from "../components/CarListItem";
import { render, screen } from "../utils/test-utils";

test("CarListItem", () => {
  const car = {
    stockNumber: 51778,
    manufacturerName: "Mercedes-Benz",
    modelName: "CLC-Klasse",
    color: "yellow",
    mileage: {
      number: 199508,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  };

  render(<CarListItem car={car} />);

  expect(screen.getByRole("img")).toHaveAttribute(
    "style",
    "background-image: url(https://auto1-js-task-api--mufasa71.repl.co/images/car.svg);"
  );

  expect(screen.getByText("Mercedes-Benz CLC-Klasse")).toBeInTheDocument();

  expect(
    screen.getByText("Stock #51778 - 199.508 KM - Diesel - yellow")
  ).toBeInTheDocument();

  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    `/cars/${car.stockNumber}`
  );
});
