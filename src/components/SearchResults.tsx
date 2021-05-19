import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import {
  fetchCars,
  selectCars,
  selectError,
  selectStatus,
  selectTotalCarsCount,
  selectTotalPageCount,
} from "../store/carsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CarListItem from "./CarListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
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

export default function SearchResults() {
  const classes = useStyles();

  const cars = useAppSelector(selectCars);
  const totalPageCount = useAppSelector(selectTotalPageCount);
  const totalCarsCount = useAppSelector(selectTotalCarsCount);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  } else if (status === "failed") {
    content = <div>{String(error)}</div>;
  } else if (status === "succeeded") {
    content = (
      <div>
        <Typography variant="h2" component="h1">
          Available Cars
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {`Showing 10 of ${totalCarsCount} results`}
        </Typography>
        {cars.length > 0 &&
          cars.map((car) => <CarListItem key={car.stockNumber} car={car} />)}
      </div>
    );
  }

  return <div className={classes.root}>{content}</div>;
}
