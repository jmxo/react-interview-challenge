import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import FilteringControls from "./components/FilteringControls";
import MainArea from "./components/MainArea";
import { theme } from "./utils/theme";

const Container = styled.div`
  display: flex;
  padding: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container>
        <FilteringControls />
        <MainArea />
      </Container>
    </ThemeProvider>
  );
}

export default App;
