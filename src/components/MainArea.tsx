import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import CarListItem from "./CarListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      padding: theme.spacing(3),
    },
    cardRoot: {
      minWidth: 275,
    },
    cardContent: {
      padding: theme.spacing(2),
    },
    subtitle: {
      marginBottom: theme.spacing(1),
    },
    link: {
      padding: theme.spacing(1),
    },
  })
);

export default function MainArea() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Available Cars
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Showing 10 of 100 results
      </Typography>
      {cars.map((car) => (
        <CarListItem key={car.stockNumber} car={car} />
      ))}
    </div>
  );
}

// mock data
const cars = [
  {
    stockNumber: 72838,
    manufacturerName: "Mercedes-Benz",
    modelName: "CLK-Klasse",
    color: "green",
    mileage: {
      number: 100332,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 32207,
    manufacturerName: "Volkswagen",
    modelName: "Tiguan",
    color: "green",
    mileage: {
      number: 100502,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 23284,
    manufacturerName: "Mercedes-Benz",
    modelName: "E-Klasse",
    color: "yellow",
    mileage: {
      number: 100578,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 87657,
    manufacturerName: "Dodge",
    modelName: "Nitro",
    color: "red",
    mileage: {
      number: 100609,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 83879,
    manufacturerName: "Tesla",
    modelName: "Model X",
    color: "black",
    mileage: {
      number: 100900,
      unit: "km",
    },
    fuelType: "Petrol",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 18916,
    manufacturerName: "Tesla",
    modelName: "Model S",
    color: "blue",
    mileage: {
      number: 101034,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 51615,
    manufacturerName: "Chrysler",
    modelName: "Crossfire",
    color: "silver",
    mileage: {
      number: 101201,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 24037,
    manufacturerName: "Audi",
    modelName: "80/90",
    color: "blue",
    mileage: {
      number: 101273,
      unit: "km",
    },
    fuelType: "Petrol",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 91866,
    manufacturerName: "Mercedes-Benz",
    modelName: "123",
    color: "green",
    mileage: {
      number: 101583,
      unit: "km",
    },
    fuelType: "Petrol",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 92321,
    manufacturerName: "Mercedes-Benz",
    modelName: "CLK-Klasse",
    color: "white",
    mileage: {
      number: 101608,
      unit: "km",
    },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
];
