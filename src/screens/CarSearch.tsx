import React from "react";
import styled from "styled-components";
import SearchControls from "../components/SearchControls";
import SearchResults from "../components/SearchResults";

const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    padding: 16px 0px;
  }
`;

export default function CarSearch() {
  return (
    <Container>
      <SearchControls />
      <SearchResults />
    </Container>
  );
}
