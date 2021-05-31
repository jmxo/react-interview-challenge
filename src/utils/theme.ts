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
    },
    background: {
      default: "#FFF",
    },
    gray: {
      main: "#EDEDED",
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
        fontSize: "0.875rem", // 14px
        fontWeight: 400,
      },
    },
  },
  props: {
    MuiCard: {
      variant: "outlined",
      square: true,
    },
    MuiButton: {
      variant: "contained",
      disableElevation: true,
    },
    MuiFormControl: {
      variant: "outlined",
    },
    MuiAppBar: {
      elevation: 0,
    },
  },
});

// https://material-ui.com/customization/palette/#adding-new-colors
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gray: Palette["primary"];
  }
  interface PaletteOptions {
    gray: PaletteOptions["primary"];
  }
}
