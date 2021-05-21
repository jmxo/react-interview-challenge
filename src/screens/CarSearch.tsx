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
  const [page, setPage] = useState<number>(1);

  // ui state, before clicking Filter
  const [color, setColor] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");

  // params to control the query, after clicking Filter
  const [queryColor, setQueryColor] = useState<string>("");
  const [queryManufacturer, setQueryManufacturer] = useState<string>("");

  const query = useCars({
    color: queryColor,
    manufacturer: queryManufacturer,
    page,
    sort: "desc",
  });

  const handleSubmit = () => {
    setQueryColor(color);
    setQueryManufacturer(manufacturer);
  };

  return (
    <Container>
      <SearchControls
        color={color}
        manufacturer={manufacturer}
        setColor={setColor}
        setManufacturer={setManufacturer}
        handleSubmit={handleSubmit}
      />
      <SearchResults query={query} page={page} setPage={setPage} />
    </Container>
  );
}
