import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { UseQueryResult } from "react-query";
import { SearchResult } from "../types";
import CarListItem from "./CarListItem";
import CarListItemSkeleton from "./CarListItemSkeleton";
import Pagination from "./Pagination";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0, 3),
    },
    cardRoot: {
      minWidth: 275,
    },
    cardContent: {
      padding: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    subtitle: {
      marginBottom: theme.spacing(3),
    },
    list: {
      marginBottom: theme.spacing(3),
    },
  })
);

interface SearchResultsProps {
  query: UseQueryResult<SearchResult, Error>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchResults(props: SearchResultsProps) {
  const classes = useStyles();

  const { query, page, setPage } = props;
  const { status, error, data } = query;
  const { cars, totalPageCount, totalCarsCount } = data || {};

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Available Cars
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        className={classes.subtitle}
      >
        {status === "loading" ? (
          <span>&nbsp;</span> // to preserve height
        ) : (
          `Showing ${cars?.length} of ${totalCarsCount} results`
        )}
      </Typography>

      <div className={classes.list}>
        {status === "loading" &&
          [...new Array(10)].map((item, idx) => (
            <CarListItemSkeleton key={idx} />
          ))}

        {status === "success" &&
          cars &&
          cars.length > 0 &&
          cars.map((car) => (
            <CarListItem
              key={`${car.manufacturerName}-${car.stockNumber}`} // I did this because some stock numbers were shared
              car={car}
            />
          ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPageCount}
          page={page}
          onChange={handleChange}
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
    </main>
  );
}
