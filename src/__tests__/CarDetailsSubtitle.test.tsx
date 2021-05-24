import CarDetailsSubtitle from "../components/CarDetailsSubtitle";
import { render, screen } from "../utils/test-utils";

test("CarDetailsSubtitle", () => {
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

  render(<CarDetailsSubtitle car={car} />);

  expect(
    screen.getByText("Stock #51778 - 199.508 KM - Diesel - yellow")
  ).toBeInTheDocument();
});
