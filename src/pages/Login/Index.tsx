import { Box, Button, Divider, IconButton, Link, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import {LazyLoadImage} from "react-lazy-load-image-component"
import Brand from "@assets/image/brand.png"
import ImageMujer from "@assets/image/mujer_frase.jpg"
export default function LoginPage() {
  const isDesktop = useMediaQuery("(min-width: 650px)")
    return (
      <Box
        className="Initial Layout"
        display="flex"
        flexDirection={isDesktop ? "row":"column"}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        p={5}
        pt={4}
        ml="auto"
        mr="auto"
        maxWidth={1440}
      >
        <Form />
        {isDesktop && (<Card/>)}
      </Box>
    );
}


function Card() {
  return (
    <Box position="relative" flexBasis="50%">
      <LazyLoadImage src={ImageMujer} width={"100%"} height={"100%"} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right={"7%"}
        bottom={"5%"}
        gap={"20%"}
      >
        <CustomIconButton children={ChevronLeftOutlinedIcon} />
        <CustomIconButton children={ChevronRightOutlinedIcon} />
      </Box>
    </Box>
  );
}

function CustomIconButton(props: any) {
    return (
      <IconButton
      {...props}
      sx={{borderRadius: "50%", border: "1px solid #F0F1F4", ...props.sx ?? {} }}
      children={
          <props.children
          {...props.children.props ?? {}}
            sx={{width: "calc(75 * 100vw / 1556)", height: "calc(75 * 100vw / 1556)",color: "#F0F1F4" , ...props.children.sx ?? {}, }}
          />
        }
      />
    );
}

function Form() {
  const isDesktop = useMediaQuery("(min-width: 650px)")
    const theme = useTheme();
    return (
        <Box flexBasis="50%" 
        maxWidth={512}
        className="form">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width={"95%"}
            className="title"
          >
            <LazyLoadImage src={Brand} alt="logo" width="50%" />
            <Typography
              textAlign="center"
              fontSize="1.1em"
              fontWeight={400}
              color={theme.palette.primary.main}
            >
              Optimizando tus procesos con enterprice AI.
            </Typography>
          </Box>
          <Divider sx={{ marginTop: "1.2rem" }} />
          <Box
            mt={4}
            ml={isDesktop ? 1 : 0}
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
              sx={{ fontFamily: "araboto-normal" }}
              variant="contained"
            >
              Acceder
            </Button>
          </Box>
          <Divider />
          <Box pl={isDesktop ?  1 : 0}
          textAlign={isDesktop ? "unset" : "center"}
          pt={4} className="footer">
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
                sx={{ fontFamily: "araboto-normal", textDecoration: "none" }}
                color={theme.palette.primary.main}
              >
                Registrarse en AIForce
              </Link>
            </Box>
          </Box>
        </Box>
    )





} 