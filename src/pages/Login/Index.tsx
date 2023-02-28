import Brand from "@assets/image/brand.png"
import { Box, Button, Divider, Link, TextField, Typography, useTheme } from "@mui/material"
import {LazyLoadImage} from "react-lazy-load-image-component"
export default function LoginPage() {
    return (
        <Box
        className="Initial Layout"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        p={7}
        >
        <Form/>
        <Box flexBasis="50%"></Box>
      </Box>
    );
}

function Form() {
    const theme = useTheme();
    return (
        <Box flexBasis="50%" className="form">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width={"95%"}
            className="title"
          >
            <LazyLoadImage src={Brand} alt="logo" width="60%" />
            <Typography
              textAlign="center"
              fontSize="1.1em"
              fontWeight={400}
              color={theme.palette.primary.main}
            >
              Optimizando tus procesos con enterprice AI.
            </Typography>
          </Box>
          <Divider style={{ marginTop: "1.2rem" }} />
          <Box
            mt={4}
            pl={1}
            mb={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Box
              width="100%"
              className="inputs"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              gap={6}
            >
              <TextField
                fullWidth
                label="Correo Electronico"
                type="email"
                placeholder="ejemplo@ejemplo.com"
              />
              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                placeholder="Inserta tu contraseña"
              />
            </Box>
            <Box width="100%" mt={3} textAlign="end" mb={5}>
              <Link mr={1} color="#9C9DA7">
                ¿Has olvidado tu contraseña?
              </Link>
            </Box>
            <Button
              fullWidth
              style={{ fontFamily: "araboto-normal" }}
              variant="contained"
            >
              Acceder
            </Button>
          </Box>
          <Divider />
          <Box pl={1} pt={4} className="footer">
            <Typography
              variant="h6"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Registrarse en AIForce
            </Typography>
            <Typography variant="body1" color="#9C9DA7">
              Contamos con los mejores expertos en AI para poder analizar tus
              procesos y recomendarte como crecer. Contacta con nosotros y nos
              pondremos en contacto contigo.
            </Typography>
            <Box mt={2}>
              <Link
                style={{ fontFamily: "araboto-normal", textDecoration: "none" }}
                color={theme.palette.primary.main}
              >
                Registrarse en AIForce
              </Link>
            </Box>
          </Box>
        </Box>
    )
} 