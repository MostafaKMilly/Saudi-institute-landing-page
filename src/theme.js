import { createTheme } from "@mui/material";

export const primaryColor = {
  main: "#1e5b63",
  light: "#4f8890",
  dark: "#003139",
};

export const secondaryColor = {
  main: "#cba770",
  light: "#ffd89f",
  dark: "#987844",
};

export const theme = createTheme({
  palette: {
    primary: {
      ...primaryColor,
    },
    secondary: {
      ...secondaryColor,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "gotham",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "& body": {
          background:
            "linear-gradient(252.31deg, #EDFFEE -0.77%, #FFF0E1 25.26%, #FFF6E9 50.14%, #EDFFEE 75.86%, #FFFFFF 100%);",
        },
        "&": {
          scrollbarWidth: "thin",
          scrollbarColor: "#bfbfbf transparent",
        },
        "&::-webkit-scrollbar": {
          width: "7px",
          height: "7px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
          borderRadius: "20px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#bfbfbf",
          borderRadius: "20px",
        },
      },
    },
  },
});
