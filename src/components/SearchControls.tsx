import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import useColors from "../hooks/useColors";
import useManufacturers from "../hooks/useManufacturers";
import useQueryParams from "../hooks/useQueryParams";
import Select from "./Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
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
    menuItem: {
      textTransform: "capitalize",
    },
  })
);

export default function SearchControls() {
  const classes = useStyles();

  // ui state for dropdowns, before clicking Filter
  const [uiColor, setUiColor] = useState<string>("");
  const [uiManufacturer, setUiManufacturer] = useState<string>("");

  const { data: colors, error: colorsError } = useColors();
  const { data: manufacturers, error: manufacturersError } = useManufacturers();

  // if error is truthy, throw to errorboundary
  useErrorHandler(colorsError || manufacturersError);

  // get query params from route
  const {
    color: routeColor,
    manufacturer: routeManufacturer,
    history,
    getSearchString,
  } = useQueryParams();

  // try to set color dropdown based on route param
  useEffect(() => {
    const isValidColor = colors?.some(
      (c) => c.toLowerCase() === routeColor?.toLowerCase()
    );

    if (isValidColor) {
      setUiColor(routeColor.toLowerCase());
    }
  }, [routeColor, colors, setUiColor]);

  // try to set Mfr dropdown based on route param
  useEffect(() => {
    const isValidManufacturer = manufacturers?.some(
      (m) => m.name.toLowerCase() === routeManufacturer?.toLowerCase()
    );

    if (isValidManufacturer) {
      setUiManufacturer(routeManufacturer.toLowerCase());
    }
  }, [routeManufacturer, manufacturers, setUiManufacturer]);

  // handler for dropdowns, only changes UI
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const { name, value } = event.target;
    if (name === "color") {
      setUiColor(value as string);
    }
    if (name === "manufacturer") {
      setUiManufacturer(value as string);
    }
  };

  // pressing `Filter` will add the search params to the route
  const handleSubmit = () => {
    history.push(getSearchString(uiColor, uiManufacturer, 1));
  };

  return (
    <aside>
      <Card
        className={classes.cardRoot}
        variant="outlined"
        square
        data-testid="search-controls"
      >
        <InputLabel id="colors">Color</InputLabel>
        <FormControl className={classes.formControl} variant="outlined">
          <Select
            name="color"
            labelId="colors"
            value={uiColor}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            data-testid="color-select"
          >
            <MenuItem value="">All Car Colors</MenuItem>
            {colors &&
              colors.length > 0 &&
              colors.map((color) => (
                <MenuItem
                  key={color}
                  value={color}
                  className={classes.menuItem}
                >
                  {color}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <br />
        <InputLabel id="manufacturer">Manufacturer</InputLabel>
        <FormControl className={classes.formControl} variant="outlined">
          <Select
            name="manufacturer"
            labelId="manufacturer"
            value={uiManufacturer}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={""} className={classes.menuItem}>
              All Manufacturers
            </MenuItem>
            {manufacturers &&
              manufacturers.length > 0 &&
              manufacturers.map((manu, id) => (
                <MenuItem
                  key={manu.name}
                  value={manu.name.toLowerCase()}
                  className={classes.menuItem}
                >
                  {manu.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
          >
            Filter
          </Button>
        </CardActions>
      </Card>
    </aside>
  );
}
