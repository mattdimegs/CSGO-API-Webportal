import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useLocation } from "react-router-dom";
import { Menu } from "@mui/material";

const GlobalHeader = () => {
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <QueryStatsIcon />
          <p>&nbsp;&nbsp;</p>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CSGO Statistics
          </Typography>
          <Button
            variant={pathname === "/" ? "outlined" : "text"}
            color={pathname === "/" ? "info" : "inherit"}
            href="/"
          >
            Home
          </Button>
          <p>&nbsp;</p>
          <Button
            onClick={handleMenu}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            variant={pathname.includes("/statistics") ? "outlined" : "text"}
            color={pathname.includes("/statistics") ? "info" : "inherit"}
          >
            Statistics
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Button
              fullWidth={true}
              variant={pathname.includes("/allmatches") ? "outlined" : "text"}
              color={pathname.includes("/allmatches") ? "info" : "inherit"}
              href="/statistics/allmatches"
              onClick={handleClose}
            >
              All Matches
            </Button>
          </Menu>
          {/* <Button
            variant={pathname === "/statistics" ? "outlined" : "text"}
            color={pathname === "/statistics" ? "info" : "inherit"}
            href="/statistics"
          >
            Statistics
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default GlobalHeader;
