import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

function CategoriesButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box mx={2}>
      <Button
        variant="text"
        color="primary"
        startIcon={<GridViewIcon color="primary" />}
        endIcon={!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUp />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Categories
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClose={handleClose}>Category one</MenuItem>
        <MenuItem onClose={handleClose}>Category two</MenuItem>
      </Menu>
    </Box>
  );
}

export default CategoriesButton;
