import { createTheme, hexToRgb } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#002FA7"
        }
    },
    typography: {
        allVariants: {
            fontFamily: "araboto-normal"
        },
    },
    components: {
        MuiLink: {
            defaultProps:{
                sx: {
                    fontFamily: "araboto-normal",
                }
            }
        }
    }
})