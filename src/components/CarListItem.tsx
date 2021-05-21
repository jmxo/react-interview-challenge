import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Car } from "../types";
import CarDetailsSubtitle from "./CarDetailsSubtitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      minWidth: 275,
      height: 90,
      padding: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      display: "flex",
    },
    cardMedia: {
      width: 90,
      height: 66,
      marginRight: theme.spacing(3),
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: `1px solid ${theme.palette.gray.main}`,
    },
    title: {
      marginBottom: theme.spacing(0.5),
    },
    subtitle: {
      marginBottom: theme.spacing(0.5),
    },
  })
);

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
        }}
      />
      <div>
        <Typography variant="h2" component="h3" className={classes.title}>
          {`${car.manufacturerName} ${car.modelName}`}
        </Typography>
        <CarDetailsSubtitle
          variant="body2"
          car={car}
          className={classes.subtitle}
        />
        <Typography variant="body2">
          <Link to={`/cars/${car.stockNumber}`} component={RouterLink}>
            View details
          </Link>
        </Typography>
      </div>
    </Card>
  );
}
