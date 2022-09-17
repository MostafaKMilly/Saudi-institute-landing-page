import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import { Container } from "@mui/system";
import { Logo } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import CategoriesButton from "./CategoriesButton";
import Drawer from "./Drawer";
import { Search } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LanguagesSelect from "./LanguageSelect";
import NotificationButton from "./NotificationButton";
import { UserMenu } from ".";
import { navs } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";

function AppBar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <MuiAppBar
        position="sticky"
        color="inherit"
        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15);" }}
      >
        <Container sx={{ maxWidth: "1290px !important" }}>
          <Toolbar
            disableGutters
            variant="dense"
            sx={{
              alignItems: "center",
              py: 0.5,
              justifyContent: { xs: "space-between", md: "center" },
            }}
          >
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
              style={{ cursor: "pointer", marginRight: "13px" }}
            />
            <IconButton
              color="primary"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
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
                sx={{ width: "250px", display: { xs: "none", lg: "block " } }}
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
              <Box ml={2} display="flex" columnGap={2}>
                <LanguagesSelect />
                <NotificationButton />
                <UserMenu />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
      <Drawer open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
}

export default AppBar;
