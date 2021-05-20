import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState<number>(1);

  const query = useCars({ color, manufacturer, page, sort: "desc" });
  const { refetch } = query;

  // `color`/`mfr` have a filter button to manually refetch, for `page` it must be automatic
  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <Container>
      <SearchControls
        color={color}
        manufacturer={manufacturer}
        setColor={setColor}
        setManufacturer={setManufacturer}
        refetch={refetch}
      />
      <SearchResults query={query} page={page} setPage={setPage} />
    </Container>
  );
}
