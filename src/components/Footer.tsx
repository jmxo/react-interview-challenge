import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      height: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      border: `1px solid ${theme.palette.gray.main}`,
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body1">© AUTO1 Group 2018</Typography>
    </footer>
  );
}
