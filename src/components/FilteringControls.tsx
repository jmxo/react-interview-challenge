import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

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
    },
    cardActions: {
      justifyContent: "flex-end",
      padding: 0,
    },
  })
);

export default function FilteringControls() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardRoot} variant="outlined" square>
        <InputLabel id="colors">Color</InputLabel>
        <FormControl className={classes.formControl} variant="outlined">
          <Select
            labelId="colors"
            defaultValue={10}
            // id="demo-simple-select-placeholder-label"
            // value={age}
            // onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={10} selected>
              All car colors
            </MenuItem>
          </Select>
        </FormControl>
        <br />
        <InputLabel id="manufacturer">Manufacturer</InputLabel>
        <FormControl className={classes.formControl} variant="outlined">
          <Select
            labelId="manufacturer"
            // id="demo-simple-select-placeholder-label"
            // value={age}
            defaultValue={10}
            // onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={10} selected>
              All manufacturers
            </MenuItem>
          </Select>
        </FormControl>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" color="primary" disableElevation>
            Filter
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
