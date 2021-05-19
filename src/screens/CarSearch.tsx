import React, { useEffect } from "react";
import styled from "styled-components";
import SearchControls from "../components/SearchControls";
import SearchResults from "../components/SearchResults";
import { fetchCarsAsync, selectCars } from "../store/carsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Container = styled.div`
  display: flex;
  padding: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default function CarSearch() {
  const cars = useAppSelector(selectCars);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, [dispatch]);

  return (
    <Container>
      <SearchControls />
      <SearchResults cars={cars} />
    </Container>
  );
}
