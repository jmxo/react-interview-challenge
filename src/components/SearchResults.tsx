import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { UseQueryResult } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import { SearchResult } from "../types";
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
    pagination: {
      padding: theme.spacing(1),
      "& > *": {
        marginRight: theme.spacing(4),
      },
      "& > *:last-child": {
        marginRight: 0,
      },
    },
  })
);

interface SearchResultsProps {
  query: UseQueryResult<SearchResult, Error>;
}

export default function SearchResults(props: SearchResultsProps) {
  const classes = useStyles();

  const { isLoading, error, data } = props.query;
  const { cars, totalPageCount, totalCarsCount } = data || {};

  let content;

  if (isLoading) {
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
  } else if (error) {
    content = <div>{error.message}</div>;
  } else {
    content = cars && (
      <div>
        <Typography variant="h2" component="h1">
          Available Cars
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {`Showing ${cars.length} of ${totalCarsCount} results`}
        </Typography>
        {cars.length > 0 &&
          cars.map((car) => <CarListItem key={car.stockNumber} car={car} />)}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" className={classes.pagination}>
            <Link to="/" component={RouterLink}>
              First
            </Link>
            <Link>Previous</Link>
            <span>{`Page 1 of ${totalPageCount}`}</span>
            <Link>Next</Link>
            <Link>Last</Link>
          </Typography>
        </div>
      </div>
    );
  }

  return <div className={classes.root}>{content}</div>;
}
