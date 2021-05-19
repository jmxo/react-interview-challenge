import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EA7F28",
      dark: "#D37328",
      contrastText: "#FFF",
    },
    text: {
      primary: "#4A4A4A",
      // primary: "#FF0000",
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    h1: {
      fontSize: "2rem", // 32px
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.125rem", // 18px
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.125rem", // 18px
    },
    body1: {
      fontSize: "0.875rem", // 14px
    },
    body2: {
      fontSize: "0.75rem", // 12px
    },
    button: {
      textTransform: "capitalize",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        width: 128,
        height: 32,
      },
    },
  },
});
