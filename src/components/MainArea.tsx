import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
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

export default function MainArea() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        Available Cars
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Showing 10 of 100 results
      </Typography>
      <Card className={classes.cardRoot} variant="outlined" square>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2" component="h3">
            Chrysler Crossfire
          </Typography>
          <Typography variant="subtitle1">
            Stock #61184 - 152.263 KM - Petrol - Yellow
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body1">
            <Link href="#" className={classes.link} color="primary">
              View details
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
