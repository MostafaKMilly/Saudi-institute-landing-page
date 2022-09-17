import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
