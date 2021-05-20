import React, { useState } from "react";
import styled from "styled-components";
import SearchControls from "../components/SearchControls";
import SearchResults from "../components/SearchResults";
import useCars from "../hooks/useCars";

const Container = styled.div`
  display: flex;
  padding: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default function CarSearch() {
  const [color, setColor] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");

  const query = useCars({ color, manufacturer });

  return (
    <Container>
      <SearchControls
        color={color}
        manufacturer={manufacturer}
        setColor={setColor}
        setManufacturer={setManufacturer}
      />
      <SearchResults query={query} />
    </Container>
  );
}
