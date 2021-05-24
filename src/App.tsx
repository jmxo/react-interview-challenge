import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import ErrorFallback from "./components/ErrorFallback";
import Footer from "./components/Footer";
import Screen from "./components/Screen";
import CarDetails from "./screens/CarDetails";
import CarSearch from "./screens/CarSearch";
import NoMatch from "./screens/NoMatch";
import { theme } from "./utils/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppBar />
          <Screen>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/search" />
                </Route>
                <Route exact path="/search" component={CarSearch} />
                <Route exact path="/cars/:stockNumber" component={CarDetails} />
                <Route path="*" component={NoMatch} />
              </Switch>
            </ErrorBoundary>
          </Screen>
          <Footer />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
