import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

function Logo({ width, height, ...props }) {
  return (
    <Box
      component="img"
      src="/images/logo.svg"
      alt="logo"
      width={width || "100px"}
      height={height || "100px"}
      sx={{
        height,
        width,
      }}
      {...props}
    />
  );
}

Logo.propTypes = {
  width: PropTypes.object,
  height: PropTypes.object,
};

export default Logo;
