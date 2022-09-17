import React from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import { Container } from "@mui/system";
import { Logo } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import CategoriesButton from "./CategoriesButton";
import { Search } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LanguagesSelect from "./LanguageSelect";
import NotificationButton from "./NotificationButton";

function AppBar() {
  const navigate = useNavigate();
  const navs = [
    {
      label: "Courses",
      path: "courses",
    },
    {
      label: "Blogsd",
      path: "blogs",
    },
    {
      label: "Contact Us",
      path: "contact-us",
    },
  ];

  return (
    <MuiAppBar
      position="sticky"
      color="inherit"
      sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15);" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ alignItems: "center", py: 0.5 }}
        >
          <Box display="flex" alignItems="center" columnGap={2}>
            <Logo
              width={{
                md: "85px",
                xs: "66px",
              }}
              height={{
                md: "61px",
                xs: "41px",
              }}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <Box display={{ xs: "none", md: "flex" }} columnGap={1}>
              <CategoriesButton />
              {navs.map((navItem) => (
                <Button
                  key={navItem.path}
                  variant="text"
                  sx={{ color: "#555555" }}
                  onClick={() => navigate(navItem.path)}
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
                sx={{ width: "250px" }}
              />
              <Button
                variant="text"
                sx={{
                  border: "3px solid #EEEEEE",
                  minWidth: "44px",
                  borderRadius: "10px",
                }}
              >
                <MoreHorizIcon color="primary" />
              </Button>
              <Button
                variant="text"
                color="primary"
                startIcon={<AssignmentIcon color="primary" />}
                sx={{ fontWeight: 600 }}
              >
                Placement Test
              </Button>
              <Box ml={2} display="flex">
                <LanguagesSelect />
                <NotificationButton />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
