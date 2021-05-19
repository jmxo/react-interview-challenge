import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function CarDetails() {
  const { stockNumber } = useParams<{ stockNumber: string }>();
  return (
    <Container>
      <Typography variant="h1">
        {`Car Details for Stock #${stockNumber}`}
      </Typography>
    </Container>
  );
}
