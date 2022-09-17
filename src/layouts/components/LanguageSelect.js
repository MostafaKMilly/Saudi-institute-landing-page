import React from "react";
import { Avatar, Box, ButtonBase, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

function LanguagesSelect() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex">
      <ButtonBase
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ display: "flex", columnGap: 0.3 }}
        disableRipple
      >
        <Avatar src="images/en.png" sx={{ width: "30px", height: "30px" }} />
        {!open ? (
          <KeyboardArrowDownIcon color="primary" size="small" />
        ) : (
          <KeyboardArrowUp color="primary" size="small" />
        )}
      </ButtonBase>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClose={handleClose}>English</MenuItem>
        <MenuItem onClose={handleClose}>Arabic</MenuItem>
      </Menu>
    </Box>
  );
}

export default LanguagesSelect;
