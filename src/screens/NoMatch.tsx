import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NoMatch() {
  return (
    <Container id="container">
      <Typography variant="h1">404 - Not Found</Typography>
    </Container>
  );
}
