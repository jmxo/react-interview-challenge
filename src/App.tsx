import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Screen from "./components/Screen";
import CarDetails from "./screens/CarDetails";
import CarSearch from "./screens/CarSearch";
import NoMatch from "./screens/NoMatch";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Screen>
          <Switch>
            <Route exact path="/" component={CarSearch} />
            <Route exact path="/cars/:stockNumber" component={CarDetails} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Screen>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
