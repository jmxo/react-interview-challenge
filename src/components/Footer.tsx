import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid lightgray;
`;

export default function Footer() {
  return (
    <Container>
      <Typography variant="body1">© AUTO1 Group 2018</Typography>
    </Container>
  );
}
