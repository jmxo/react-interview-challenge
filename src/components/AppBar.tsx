import MuiAppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      color: theme.palette.text.primary,
      height: "80px",
      justifyContent: "center",
    },
    logo: {
      maxWidth: 200,
    },
    links: {
      "& > * + *": {
        marginLeft: theme.spacing(3),
      },
    },
  })
);

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar
        position="static"
        classes={{
          root: classes.root,
        }}
        variant="outlined"
      >
        <Toolbar>
          <RouterLink to="/">
            <img src={logo} alt="Auto1 logo" className={classes.logo} />
          </RouterLink>
          <div style={{ flex: 1 }}></div>
          <Typography
            className={classes.links}
            color="textPrimary"
            variant="subtitle1"
            component="nav"
          >
            <Link
              to="#"
              component={RouterLink}
              color="inherit"
              underline="none"
            >
              Purchase
            </Link>
            <Link
              to="#"
              component={RouterLink}
              color="inherit"
              underline="none"
            >
              My Orders
            </Link>
            <Link
              to="#"
              component={RouterLink}
              color="inherit"
              underline="none"
            >
              Sell
            </Link>
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
