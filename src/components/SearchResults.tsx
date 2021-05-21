import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { UseQueryResult } from "react-query";
import { SearchResult } from "../types";
import CarListItem from "./CarListItem";
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
  const { isLoading, error, data } = query;
  const { cars, totalPageCount, totalCarsCount } = data || {};

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
        <Typography variant="h2" component="h1" className={classes.title}>
          Available Cars
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {`Showing ${cars.length} of ${totalCarsCount} results`}
        </Typography>
        <div className={classes.list}>
          {cars.length > 0 &&
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
      </div>
    );
  }

  return <div className={classes.root}>{content}</div>;
}
