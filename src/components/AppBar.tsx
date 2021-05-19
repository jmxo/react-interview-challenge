import MuiAppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      color: theme.palette.text.primary,
      flexGrow: 1,
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
          <img src={logo} alt="Auto1 logo" className={classes.logo} />
          <div style={{ flex: 1 }}></div>
          <Typography
            className={classes.links}
            color="textPrimary"
            variant="subtitle1"
          >
            <Link href="#" color="inherit">
              Purchase
            </Link>
            <Link href="#" color="inherit">
              My Orders
            </Link>
            <Link href="#" color="inherit">
              Sell
            </Link>
          </Typography>
          {/* <Button color="inherit">Purchase</Button>
          <Button color="inherit">My Orders</Button>
          <Button color="inherit">Sell</Button> */}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
