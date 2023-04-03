import blue from "./blue";
import grey from "./grey";

const theme = {
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: { blue },
    grey: { grey },
    background: {
      default: "#ffffff",
      paper: "#f6f7f8",
      divider: "#e9eaec",
      disabled: "#e8eaed",
      primary: "#ECF7FD",
    },
    text: {
      primary: "#18191b",
      secondary: "#656a72",
      body: "#303336",
      tertiary: "#989da4",
      link: "#cc338c",
      disabled: "#9ea2a9",
    },
    icon: {
      primary: "#18191b",
      secondary: "#787e87",
      active: "#ffffff",
      disabled: "#b9bcc1",
    },
    error: {
      main: "#db4435",
      light: "#e36a5f",
      dark: "#ba2f21",
    },
    info: {
      main: "#107bbc",
      light: "#1498eb",
      dark: "#0c5b8d",
    },
    success: {
      main: "#42bd42",
      light: "#67cb67",
      dark: "#359735",
    },
    warning: {
      main: "#f5ac00",
      light: "#ffbf29",
      dark: "#c28800",
    },
  },
  shadows: {
    0: "0px 8px 40px 0px #0000001f",
    1: "0px 2px 20px 0px #0000001f",
    2: "0px 4px 24px 0px #0000001f",
    3: "2px 0px 16px 0px #0000001a",
    4: "-2px 0px 16px 0px #0000001a",
    5: "0px 0px 0px 1.5px #5b43d0",
    6: "0px 0px 0px 4px #b9eafe",
  },
  typography: {
    htmlFontSize: 16,
    fontFamily:
      "'Plus Jakarta Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
