import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Index";

export default function DashboardLayout() {
    const isDesktop = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    return (
      <>
        <Box
        sx={{flex: 1}}
        >
          <Sidebar />
          <Box
          >
          <Box
            mt={isDesktop? 0 : 4}
            ml={ isDesktop? "230px" : 0}
        >
            <Outlet />
        </Box>
          </Box>
        </Box>
      </>
    );

}