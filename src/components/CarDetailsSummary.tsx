import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";
import { Car } from "../types";

type Props = {
  car: Car;
} & TypographyProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    capitalize: {
      textTransform: "capitalize",
    },
  })
);

export default function CarDetailsSummary(props: Props) {
  const classes = useStyles();
  const { car, className, ...rest } = props;

  return (
    <Typography
      variant="subtitle1"
      {...rest}
      className={classes.capitalize + " " + className}
    >
      {`Stock #${car.stockNumber} - ${
        Number(car.mileage.number) / 1000
      } ${car.mileage.unit.toUpperCase()} - ${car.fuelType} - ${car.color}`}
    </Typography>
  );
}
