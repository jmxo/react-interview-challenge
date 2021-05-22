import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      maxWidth: 160,
      marginBottom: theme.spacing(3),
    },
    marginBottom: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default function NoMatch() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <img src={logo} alt="Auto1 logo" className={classes.logo} />
      <Typography variant="h1" className={classes.marginBottom}>
        404 - Not Found
      </Typography>
      <Typography variant="subtitle1" className={classes.marginBottom}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Typography variant="subtitle1" className={classes.marginBottom}>
        You can always go back to the{" "}
        <Link to="/" component={RouterLink}>
          home page
        </Link>
        .
      </Typography>
    </main>
  );
}
