import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import CarDetailsSummary from "../components/CarDetailsSummary";
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
    },
    favCard: {
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
    coverContainer: {
      marginBottom: theme.spacing(2),
    },
    cover: {
      border: `1px solid ${theme.palette.gray.main}`,
      backgroundColor: theme.palette.gray.main,
      width: "100%",
      height: 400,
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

  // persist favorites in localstorage
  const [favorites, setFavorites] = useLocalStorageState<string[]>(
    "moismat/react-project/favorites",
    []
  );

  // get stock number from query params
  const { stockNumber } = useParams<{ stockNumber: string }>();

  // use stock number to fetch car details
  const { status, error, data: car } = useCar(stockNumber);

  // if error is truthy, throw to error boundary
  useErrorHandler(error);

  const isFavorite = favorites.includes(stockNumber);

  // handler for Save/Remove button
  const handleClick = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((i) => i !== stockNumber));
    } else {
      setFavorites([...favorites, stockNumber]);
    }
  };

  return (
    <Container>
      {/* Image */}
      <div className={classes.coverContainer}>
        {status === "loading" ? (
          <Skeleton variant="rect" height={400} />
        ) : (
          car && (
            <div
              className={classes.cover}
              style={{
                backgroundImage: `url(${car.pictureUrl})`,
              }}
              data-testid="car-details-cover"
            />
          )
        )}
      </div>

      <ContentWrapper>
        <main className={classes.main}>
          {/* Chrysler Crossfire */}
          <Typography variant="h1" className={classes.title}>
            {status === "loading" ? (
              <Skeleton />
            ) : (
              car && `${car.manufacturerName} ${car.modelName}`
            )}
          </Typography>

          {/* Stock # 61184 - 152.263 KM - Petrol - Yellow */}
          {status === "loading" ? (
            <Typography component="h2" className={classes.subtitle}>
              <Skeleton />
            </Typography>
          ) : (
            car && <CarDetailsSummary car={car} className={classes.subtitle} />
          )}

          {/* Availability */}
          <Typography>
            {status === "loading" ? (
              <Skeleton />
            ) : (
              "This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions."
            )}
          </Typography>
        </main>

        <aside className={classes.aside}>
          {status === "success" && (
            <Card square className={classes.favCard}>
              <Typography>
                {isFavorite
                  ? `This car is saved in your collection of favourite items.`
                  : `If you like this car, click the button and save it in your
                collection of favourite items.`}
              </Typography>

              <CardActions className={classes.cardActions}>
                <Button onClick={handleClick} color="primary">
                  {isFavorite ? "Remove" : "Save"}
                </Button>
              </CardActions>
            </Card>
          )}
        </aside>
      </ContentWrapper>
    </Container>
  );
}
