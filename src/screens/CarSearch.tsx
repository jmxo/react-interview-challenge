import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CarListItem from "../components/CarListItem";
import CarListItemSkeleton from "../components/CarListItemSkeleton";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import useCars from "../hooks/useCars";
import useColors from "../hooks/useColors";
import useManufacturers from "../hooks/useManufacturers";
import useQueryParams from "../hooks/useQueryParams";
import useValidatePageParam from "../hooks/useValidatePageParam";
import { formatSearchString } from "../utils/format-search-string";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flex: 1,
      maxWidth: 650,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0, 3),
      "@media (max-width: 425px)": {
        padding: "8px",
        width: "100%",
      },
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
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
    },
    filtersCardRoot: {
      width: 300,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3), // for mobile
    },
    formControl: {
      minWidth: 120,
      width: "100%",
      marginBottom: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    cardActions: {
      justifyContent: "flex-end",
      padding: 0,
    },
  })
);

const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    padding: 16px 0px;
  }
`;

export default function CarSearch() {
  const classes = useStyles();
  const history = useHistory();

  // ui state for dropdowns, before clicking Filter
  const [uiColor, setUiColor] = useState<string>("");
  const [uiManufacturer, setUiManufacturer] = useState<string>("");

  // fetch colors/manufacturers from api to show inside dropdowns
  const { data: colors, error: colorsError } = useColors();
  const { data: manufacturers, error: manufacturersError } = useManufacturers();

  // if error is truthy, throw to errorboundary
  useErrorHandler(colorsError || manufacturersError);

  // get query params from route
  const { color, manufacturer, page: pageString } = useQueryParams();

  // if page is not a valid number, change to 1 before making a network request
  let page = parseInt(pageString ?? "1");
  if (Number.isNaN(page) || page < 1) {
    page = 1;
  }

  // use query params from route for react-query
  const {
    status,
    error: carsError,
    data,
  } = useCars({ color, manufacturer, page });

  // if error is truthy, throw to errorboundary
  useErrorHandler(carsError);

  const { cars, totalPageCount, totalCarsCount } = data || {};

  useValidatePageParam(totalPageCount);

  // try to set color dropdown based on route param
  useEffect(() => {
    const isValidColor = colors?.some(
      (c) => c.toLowerCase() === color?.toLowerCase()
    );

    if (isValidColor) {
      setUiColor(color.toLowerCase());
    }
  }, [color, colors, setUiColor]);

  // try to set Mfr dropdown based on route param
  useEffect(() => {
    const isValidManufacturer = manufacturers?.some(
      (m) => m.name.toLowerCase() === manufacturer?.toLowerCase()
    );

    if (isValidManufacturer) {
      setUiManufacturer(manufacturer.toLowerCase());
    }
  }, [manufacturer, manufacturers, setUiManufacturer]);

  // handler for dropdowns, only changes UI
  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { name, value } = event.target;
    if (name === "color") {
      setUiColor(value as string);
    }
    if (name === "manufacturer") {
      setUiManufacturer(value as string);
    }
  };

  // handler for changing page from pagination component
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    history.push(formatSearchString(color, manufacturer, value));
  };

  // pressing `Filter` will add the search params to the route
  const handleSubmit = () => {
    history.push(formatSearchString(uiColor, uiManufacturer, 1));
  };

  return (
    <Container>
      <aside>
        <Card className={classes.filtersCardRoot} data-testid="search-controls">
          <InputLabel id="colors">Color</InputLabel>
          <FormControl className={classes.formControl}>
            <Select
              name="color"
              labelId="colors"
              value={uiColor}
              onChange={handleSelectChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">All Car Colors</MenuItem>
              {!!colors?.length &&
                colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <br />

          <InputLabel id="manufacturer">Manufacturer</InputLabel>
          <FormControl className={classes.formControl}>
            <Select
              name="manufacturer"
              labelId="manufacturer"
              value={uiManufacturer}
              onChange={handleSelectChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">All Manufacturers</MenuItem>
              {!!manufacturers?.length &&
                manufacturers.map((manu) => (
                  <MenuItem key={manu.name} value={manu.name.toLowerCase()}>
                    {manu.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <CardActions className={classes.cardActions}>
            <Button color="primary" onClick={handleSubmit}>
              Filter
            </Button>
          </CardActions>
        </Card>
      </aside>

      <main className={classes.main}>
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

        <div className={classes.list} data-testid="car-list">
          {status === "loading" &&
            [...new Array(10)].map((_item, idx) => (
              <CarListItemSkeleton key={idx} />
            ))}

          {status === "success" &&
            !!cars?.length &&
            cars.map((car) => (
              <CarListItem
                key={`${car.manufacturerName}-${car.stockNumber}`} // I did this because some stock numbers were shared
                car={car}
              />
            ))}
        </div>

        <div className={classes.paginationContainer}>
          <Pagination
            count={totalPageCount}
            page={page}
            onChange={handlePageChange}
            size="large"
            showFirstButton
            showLastButton
          />
        </div>
      </main>
    </Container>
  );
}
