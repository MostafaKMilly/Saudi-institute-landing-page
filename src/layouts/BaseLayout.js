import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./components";

function BaseLayout() {
  return (
    <Box>
      <AppBar />
      <Container sx={{ maxWidth: "1100px !important", my: 10 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default BaseLayout;
