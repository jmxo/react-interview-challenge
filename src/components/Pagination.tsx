import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { PaginationProps, usePagination } from "@material-ui/lab/Pagination";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
    },
    listItem: {
      marginRight: theme.spacing(2),
    },
    label: {
      cursor: "default",
      color: "inherit",
      fontFamily: "Roboto",
      fontSize: "14px",
    },
    link: {
      textTransform: "capitalize",
      fontFamily: "Roboto",
      fontSize: "14px",
    },
  })
);

export default function Pagination(props: PaginationProps) {
  const classes = useStyles(props);
  const { items } = usePagination(props);
  const { count } = props;

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "page" && selected) {
            children = (
              <Typography color="textPrimary">
                <Link
                  {...item}
                  component="button"
                  underline="none"
                  className={classes.label}
                  tabIndex={-1}
                >
                  {`Page ${page} of ${count}`}
                </Link>
              </Typography>
            );
          } else if (
            type === "first" ||
            type === "last" ||
            type === "next" ||
            type === "previous"
          ) {
            children = (
              <Typography color="primary">
                <Link
                  {...item}
                  component="button"
                  className={classes.link}
                  style={{
                    cursor: item.disabled ? "default" : "pointer",
                    pointerEvents: item.disabled ? "none" : "all",
                    color: item.disabled ? "#989898" : "inherit",
                  }}
                  tabIndex={0}
                >
                  {type}
                </Link>
              </Typography>
            );
          } else {
            return null;
          }

          return (
            <li key={index} className={classes.listItem}>
              {children}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
