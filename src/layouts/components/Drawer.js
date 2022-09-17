import React from "react";
import {
  Box,
  Button,
  Container,
  Drawer as MuiDrawer,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import PropTypes from "prop-types";
import { Close, Search } from "@mui/icons-material";
import CategoriesButton from "./CategoriesButton";
import { navs } from "../../constants";
import { useNavigate } from "react-router-dom";

function Drawer({ open, onClose }) {
  const navigate = useNavigate();

  const moveToPath = (path) => {
    onClose();
    navigate(path);
  };
  return (
    <MuiDrawer
      variant="temporary"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
    >
      <Toolbar
        component={Container}
        maxWidth="lg"
        sx={{ justifyContent: "flex-end" }}
      >
        <IconButton onClick={onClose}>
          <Close color="primary" />
        </IconButton>
      </Toolbar>
      <Box columnGap={1} display="flex" flexDirection={"column"} rowGap={4}>
        <CategoriesButton />
        {navs.map((navItem) => (
          <Button
            key={navItem.path}
            variant="text"
            sx={{ color: "#555555" }}
            onClick={() => moveToPath(navItem.path)}
          >
            {navItem.label}
          </Button>
        ))}
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#AAAAAA" }} />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          sx={{ width: "250px", display: { xs: "none", lg: "block " } }}
        />
      </Box>
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
export default Drawer;
