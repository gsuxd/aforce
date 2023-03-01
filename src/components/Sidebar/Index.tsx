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

function CustomDivider(props: any) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Divider color="#fcfcfc" sx={{ width: "90%" }} {...props} />
    </Box>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
      <MenuWrapper
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      justifyContent="space-between"
      >
        <Box>
        <Toolbar
          sx={{
            padding: isDesktop ? "4rem" : "3.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoadImage src={brand} />
        </Toolbar>
        <CustomDivider/>
        <List>
          <SubMenuWrapper>
            <List>
              <SidebarItem
              to="/dashboard/actions"
              icon={<BoltOutlined/>}
              onClick={handleDrawerToggle}
              >
                Actions
              </SidebarItem>
              <SidebarItem
              to="/dashboard/resultados"
              icon={<InsertChartOutlined/>}
              onClick={handleDrawerToggle}
              >
                Resultados
              </SidebarItem>
              <SidebarItem
              to="/dashboard/facturacion"
              icon={<ArticleOutlined/>}
              onClick={handleDrawerToggle}
              >
                Facturación
              </SidebarItem>
              <SidebarItem
              to="/dashboard/usuarios"
              icon={<PersonOutline/>}
              onClick={handleDrawerToggle}
              >
                Usuarios
              </SidebarItem>
              <SidebarItem
              to="/dashboard/ajustes"
              icon={<TuneOutlined/>}
              onClick={handleDrawerToggle}
              >
                Ajustes
              </SidebarItem>
            </List>
          </SubMenuWrapper>
        </List>
        </Box>
        <Box>
        <CustomDivider/>
          <SubMenuWrapper>
            <List>
              <SidebarItem
              to="/dashboard/chat-soporte"
              icon={<BoltOutlined/>}
              onClick={handleDrawerToggle}
              >
                Chat Soporte
              </SidebarItem>
              <SidebarItem
              to="/dashboard/contacto"
              icon={<BoltOutlined/>}
              onClick={handleDrawerToggle}
              >
                Contacto
              </SidebarItem>
              <SidebarItem
              to="/login"
              icon={<BoltOutlined/>}
              onClick={handleDrawerToggle}
              >
                Cerrar Sesión
              </SidebarItem>
            </List>
          </SubMenuWrapper>
        </Box>
      </MenuWrapper>
  );
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
            <Menu />
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
            {drawer}
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
            {drawer}
          </Drawer>
        )}
      </Box>
    </>
  );
}

