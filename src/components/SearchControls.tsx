import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import useColors from "../hooks/useColors";
import useManufacturers from "../hooks/useManufacturers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
    cardRoot: {
      width: 400,
      padding: theme.spacing(3),
    },
    formControl: {
      minWidth: 120,
      width: "100%",
      marginBottom: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
      textTransform: "capitalize",
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

interface SearchControlsProps {
  color: string;
  manufacturer: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

export default function SearchControls(props: SearchControlsProps) {
  const classes = useStyles();

  const { color, manufacturer, setColor, setManufacturer, handleSubmit } =
    props;

  const { data: colors } = useColors();
  const { data: manufacturers } = useManufacturers();

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const { name, value } = event.target;
    if (name === "color") {
      setColor(value as string);
    }
    if (name === "manufacturer") {
      setManufacturer(value as string);
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardRoot} variant="outlined" square>
        <InputLabel id="colors">Color</InputLabel>
        <FormControl className={classes.formControl} variant="outlined">
          <Select
            name="color"
            labelId="colors"
            value={color}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
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
            value={manufacturer}
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
                  value={manu.name}
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
    </div>
  );
}
