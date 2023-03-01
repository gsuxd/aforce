import { Circle } from "@mui/icons-material"
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IProps {
    title: string,
    id: number
}

export default function ActionCard({title, id}: IProps) {
    const isDesktop = useMediaQuery('(min-width:600px)')
    const theme = useTheme()
    return (
      <Box
      borderRadius="1rem"
        display="flex"
        border="1px solid #9C9DA7"
        flexDirection={"column"}
        justifyContent="space-between"
        alignContent="center"
        p={2}
        gap={2}
        maxWidth="90%"
      >
        <Typography fontSize="1rem" textAlign={isDesktop ? "start" : "center"}>
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          gap={1}
          alignContent="center"
        >
          <Link
            color="#9C9DA7"
            sx={{
              textDecoration: "none",
              ":hover": {
                cursor: "pointer"
            }
            }}
          >
            Ver informacion
          </Link>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Circle
              sx={{ color: "#9C9DA7", width: "0.4rem", height: "0.4rem" }}
            />
          </Box>
          <Link
            color={theme.palette.primary.main}
            onClick={() => {}}
            sx={{
                textDecoration: "none",
                ":hover": {
                    cursor: "pointer"
                }
              }}
          >
            Usar action
          </Link>
        </Box>
      </Box>
    );

}