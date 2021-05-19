import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      minWidth: 275,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: "flex",
    },
    cardMedia: {
      width: 120,
      height: 80,
    },
    cardContent: {
      padding: theme.spacing(1),
    },
    subtitle: {
      marginBottom: theme.spacing(1),
    },
  })
);

interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  pictureUrl: string;
}

interface CarListItemProps {
  car: Car;
}

export default function CarListItem(props: CarListItemProps) {
  const classes = useStyles();
  const { car } = props;
  return (
    <Card className={classes.cardRoot} variant="outlined" square>
      <div
        className={classes.cardMedia}
        style={{
          backgroundImage: `url(${car.pictureUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "1px solid lightgray",
        }}
      />
      <div className={classes.cardContent}>
        <Typography variant="h2" component="h3">
          {`${car.manufacturerName} ${car.modelName}`}
        </Typography>
        <Typography variant="subtitle1">
          {`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`}
        </Typography>
        <Typography variant="body1">
          <Link href="#" color="primary">
            View details
          </Link>
        </Typography>
      </div>
    </Card>
  );
}
