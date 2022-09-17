import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme";

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
