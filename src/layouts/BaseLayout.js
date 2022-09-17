import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./components";

function BaseLayout() {
  return (
    <Box>
      <AppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default BaseLayout;
