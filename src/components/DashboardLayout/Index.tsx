import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Index";

export default function DashboardLayout() {
    const isDesktop = useMediaQuery("(min-width:600px)");
    return (
      <>
        <Box display="flex">
          <Sidebar />
          <Box
          mt={isDesktop? 0 : 4}
          >
          <Outlet />
          </Box>
        </Box>
      </>
    );

}