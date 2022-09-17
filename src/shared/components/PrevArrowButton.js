import React from "react";
import { Avatar } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
        left: "-54px",
        display: {
          xs: "none",
          lg: "flex",
        },
        ...styles,
      }}
    >
      <NavigateBeforeIcon color="primary" sx={{ mr: "19px" }} />
    </Avatar>
  );
}

export default NextArrowButton;
