import { StorageOutlined } from "@mui/icons-material";
import { Button, useMediaQuery, useTheme } from "@mui/material";

interface IProps {
    children?: React.ReactNode | string;
    isSelected: boolean,
    id: number,
    onClick: (id: number) => void,
}

export function CategoryButton({isSelected, children, id, onClick}: IProps) {
    const isDesktop = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    return (
        <Button
            disableRipple
            onClick={() => onClick(id)}
            startIcon={<StorageOutlined />}
            className={isSelected ? "selected" : ""}
            sx={{
            color: "#9C9DA7",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
                textTransform: "none",
            borderRadius: "10px",
            padding: theme.spacing(1.2, 3),
            "&.selected": {
                background: "#F0F1F4",
                color: theme.palette.primary.main,
                ".MuiButton-startIcon": {
                    color: theme.palette.primary.main,
                }
            },
            ".MuiButton-startIcon": {
                fontSize: theme.typography.pxToRem(20),
                marginRight: theme.spacing(1),
                color: "#9C9DA7"
              }
        }}
            >
                {children}
            </Button>
    )
}