import { Box } from "@mui/material";
import React from "react";

function CustomSlide({ children, ...props }) {
  return (
    <Box {...props} mx={2}>
      {children}
    </Box>
  );
}

export default CustomSlide;
