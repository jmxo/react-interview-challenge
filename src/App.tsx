import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import ErrorFallback from "./components/ErrorFallback";
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
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Switch>
              <Route exact path="/" component={CarSearch} />
              <Route exact path="/cars/:stockNumber" component={CarDetails} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </ErrorBoundary>
        </Screen>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
