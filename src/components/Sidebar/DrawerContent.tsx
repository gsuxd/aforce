import {
    Box,
    Divider,
    List,
    Toolbar,
    useMediaQuery,
  } from "@mui/material";
import {  BoltOutlined, TuneOutlined, PersonOutline, ArticleOutlined, InsertChartOutlined } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import brand from "@assets/image/brand_white.png";
import { MenuWrapper, SubMenuWrapper } from "./StyledWrappers";
import SidebarItem from "./SidebarItem";

interface IProps {
    handleDrawerToggle: () => void;
}

function CustomDivider(props: any) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Divider color="#fcfcfc" sx={{ width: "90%" }} {...props} />
      </Box>
    );
  }

export function DrawerContent({handleDrawerToggle}: IProps) {
    const isDesktop = useMediaQuery("(min-width:600px)");
    
    return (
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
}