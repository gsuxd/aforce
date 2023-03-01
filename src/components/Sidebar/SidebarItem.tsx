import { Button, ListItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
interface IProps extends  React.HTMLAttributes<HTMLAnchorElement>{
    icon: React.ReactNode,
    to: string
}
export default function SidebarItem({onClick, icon, children, to}: IProps) {
  return (
        <ListItem>
                <Button
                  disableRipple
                  component={NavLink}
                  onClick={onClick}
                  to={to}
                  startIcon={icon}
                >
                  {children}
                </Button>
              </ListItem>
    )
}