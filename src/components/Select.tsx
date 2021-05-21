import { MenuProps } from "@material-ui/core/Menu";
import MuiSelect, { SelectProps } from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectRoot: {
      borderRadius: 0,
      textTransform: "capitalize",
      "& fieldset": {
        borderColor: theme.palette.gray.main,
      },
    },
    inputOutlined: {
      padding: "8px 14px",
    },
    selectIcon: {
      color: theme.palette.gray.main,
    },
    menuPaper: {
      marginTop: 4,
      boxShadow: "none",
      border: `1px solid ${theme.palette.gray.main}`,
      borderRadius: 0,
    },
    menuList: {
      padding: 0,
      background: "white",
      "& li.Mui-selected": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      "& li.Mui-selected:hover": {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      },
      "& > li:not(:last-child)": {
        borderBottom: `1px solid ${theme.palette.gray.main}`,
      },
    },
  })
);

export default function Select(props: SelectProps) {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  const inputProps = {
    classes: {
      outlined: classes.inputOutlined,
    },
  };

  const menuProps = {
    classes: {
      paper: classes.menuPaper,
      list: classes.menuList,
    },

    // moves the menu below the select input
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <MuiSelect
      className={className + " " + classes.selectRoot}
      classes={{
        root: classes.selectRoot,
        icon: classes.selectIcon,
      }}
      inputProps={inputProps}
      MenuProps={menuProps as MenuProps}
      {...rest}
    >
      {children}
    </MuiSelect>
  );
}
