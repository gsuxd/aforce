import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Index";

export default function DashboardLayout() {
    return (<>
        <Sidebar/>
        <Outlet/>
    </>)
}