import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CarDetailsSubtitle from "../components/CarDetailsSubtitle";
import useCar from "../hooks/useCar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flex: 1,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
      marginRight: theme.spacing(3),
      maxWidth: 600,
    },
    aside: {
      width: 300,
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
    cardMedia: {
      width: "100%",
      height: 400,
      marginBottom: theme.spacing(2),
      border: `1px solid ${theme.palette.gray.main}`,
      backgroundColor: theme.palette.gray.main,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    cardActions: {
      justifyContent: "flex-end",
      padding: 0,
    },
  })
);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 8px;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default function CarDetails() {
  const classes = useStyles();
  const { stockNumber: routeStockNumber } =
    useParams<{ stockNumber: string }>();

  const stockNumber = parseInt(routeStockNumber);

  const { isLoading, error, data: car } = useCar(stockNumber);

  if (isLoading) return <div>Loading...</div>; // use react skeleton

  if (error) return <div>{error.message}</div>;

  if (!car) {
    throw new Error("Car not found!");
  }

  return (
    <Container>
      <div
        className={classes.cardMedia}
        style={{
          backgroundImage: `url(${car.pictureUrl})`,
        }}
      />
      <ContentWrapper>
        <main className={classes.main}>
          <Typography
            variant="h1"
            className={classes.title}
          >{`${car.manufacturerName} ${car.modelName}`}</Typography>
          <CarDetailsSubtitle car={car} className={classes.subtitle} />
          <Typography>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </Typography>
        </main>
        <Card
          component="aside"
          variant="outlined"
          square
          className={classes.aside}
        >
          <Typography>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </Typography>
          <br />
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="primary" disableElevation>
              Save
            </Button>
          </CardActions>
        </Card>
      </ContentWrapper>
    </Container>
  );
}
