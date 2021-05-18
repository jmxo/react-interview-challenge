import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      padding: theme.spacing(1),
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

export default function MainArea() {
  const classes = useStyles();
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">Available Cars</Typography>
      <Typography variant="subtitle1">Showing 10 of 100 results</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Chrysler Crossfire
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Stock #61184 - 152.263 KM - Petrol - Yellow
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
