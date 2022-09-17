import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const NotificationNumber = styled(Box)({
  position: "absolute",
  background: "#FF5252",
  borderRadius: "73%",
  right: "-2px",
  height: "16px",
  width: "12px",
  fontSize: "11px",
  textAlign: "center",
  color: "white",
  top: "20px",
});

function NotificationButton() {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <NotificationsNoneOutlinedIcon color="primary" fontSize="medium" />
      <NotificationNumber>2</NotificationNumber>
    </Box>
  );
}

export default NotificationButton;
