import React from "react";
import { Avatar } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function NextArrowButton(props) {
  const { onClick, styles, className } = props;
  return (
    <Avatar
      className={className}
      onClick={onClick}
      sx={{
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "2px solid #CBA770",
        position: "absolute",
        right: "-54px",
        display: {
          xs: "none",
          lg: "flex",
        },
        ...styles,
      }}
    >
      <NavigateNextIcon color="primary" sx={{ mr: "19px" }} />
    </Avatar>
  );
}

export default NextArrowButton;
