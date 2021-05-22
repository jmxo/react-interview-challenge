import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import ContentLoader from "react-content-loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 90,
      minWidth: 275,
      border: `1px solid ${theme.palette.gray.main}`,
      marginBottom: theme.spacing(1),
    },
  })
);

const CarListItemSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="14" y="14" rx="0" ry="0" width="90" height="64" />
        <rect x="126" y="14" rx="0" ry="0" width="220" height="23" />
        <rect x="126" y="42" rx="0" ry="0" width="220" height="12" />
        <rect x="126" y="64" rx="0" ry="0" width="66" height="12" />
      </ContentLoader>
    </div>
  );
};

export default CarListItemSkeleton;
