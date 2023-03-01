import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Menu} from "@mui/icons-material";
import { DrawerContent } from "./DrawerContent";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  const drawerWidth = isDesktop ? 230 : 260;
  return (
    <>
      <CssBaseline />
      {!isDesktop && (
        <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu 
            sx={{width: "1.9rem", height: "1.9rem"}}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {!isDesktop && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <DrawerContent
            handleDrawerToggle={handleDrawerToggle}
            />
          </Drawer>
        )}
        {isDesktop && (
          <Drawer
            variant="permanent"
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
              },
            }}
            open
          >
            <DrawerContent
            handleDrawerToggle={handleDrawerToggle}
            />
          </Drawer>
        )}
      </Box>
    </>
  );
}

