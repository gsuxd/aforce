import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Menu,  BoltOutlined, TuneOutlined, PersonOutline, ArticleOutlined, InsertChartOutlined } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import brand from "@assets/image/brand_white.png";
import { MenuWrapper, SubMenuWrapper } from "./StyledWrappers";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:650px)");
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <MenuWrapper>
        <Toolbar
          sx={{
            padding: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoadImage src={brand} />
        </Toolbar>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        ><Divider color="#fcfcfc" sx={{ width: "90%"}}/></Box>
        <List>
          <SubMenuWrapper>
            <List>
              <SidebarItem
              to="/dashboard/actions"
              icon={<BoltOutlined/>}
              onClick={() => setMobileOpen(false)}
              >
                Actions
              </SidebarItem>
              <SidebarItem
              to="/dashboard/resultados"
              icon={<InsertChartOutlined/>}
              onClick={() => setMobileOpen(false)}
              >
                Resultados
              </SidebarItem>
              <SidebarItem
              to="/dashboard/facturacion"
              icon={<ArticleOutlined/>}
              onClick={() => setMobileOpen(false)}
              >
                Facturación
              </SidebarItem>
              <SidebarItem
              to="/dashboard/usuarios"
              icon={<PersonOutline/>}
              onClick={() => setMobileOpen(false)}
              >
                Usuarios
              </SidebarItem>
              <SidebarItem
              to="/dashboard/ajustes"
              icon={<TuneOutlined/>}
              onClick={() => setMobileOpen(false)}
              >
                Ajustes
              </SidebarItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
  );
  const drawerWidth = 250;
  return (
    <>
      <CssBaseline />
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
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
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
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
        {isDesktop && (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </>
  );
}
