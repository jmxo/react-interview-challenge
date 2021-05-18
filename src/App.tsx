import React from "react";
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import FilteringControls from "./components/FilteringControls";
import MainArea from "./components/MainArea";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EA7F28",
      contrastText: "#FFF",
    },
  },
  spacing: [8, 12, 24],
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar />
        <div style={{ display: "flex", padding: "20px" }}>
          <div style={{ flex: 3 }}>
            <FilteringControls />
          </div>
          <div style={{ flex: 7 }}>
            <MainArea />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
