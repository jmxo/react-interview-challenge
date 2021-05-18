import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      color: "#4A4A4A",
      flexGrow: 1,
      height: "80px",
      justifyContent: "center",
    },
    logo: {
      maxWidth: 200,
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
      >
        <Toolbar>
          <img src={logo} alt="Auto1 logo" className={classes.logo} />
          <div style={{ flex: 1 }}></div>
          <Button color="inherit">Purchase</Button>
          <Button color="inherit">My Orders</Button>
          <Button color="inherit">Sell</Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
