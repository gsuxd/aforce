import ActionCard from "@components/ActionCard";
import { Box, useMediaQuery } from "@mui/material";

export default function CardsList() {
    const actions = [
        {
          title: "Screening de CVs para la obtención de scoring de candidatos",
        },
        {
          title: "Normalización de información en la base de datos ",
        },
        {
          title: "Onboarding de candidato en el departamento",
        },
        {
          title: "Transcripción de reunión a puntos más importantes",
        },
        {
          title: "Soporte asistencial automático para la gestión de siniestros",
        },
        {
          title: "Scoring crediticio sobre datos bancarios de usuarios.",
        },
        {
          title: "Scoring de prima de póliza sobre información de salud.",
        },
        {
          title: "Revisión de pruebas de código para candidatos técnicos.",
        },
        {
          title: "Obtención de métricas y patrones de consumo temporales.",
        },
      ];
  
      const isTablet = useMediaQuery("(min-width:1024px)");
      const isDesktop = useMediaQuery("(min-width:600px)");
      return (
        <Box
          p={4}
          display="grid"
          gridTemplateColumns={
            isDesktop ? "1fr 1fr 1fr" : isTablet ? "1fr 1fr" : "1fr"
          }
          flexDirection={isTablet ? "row" : "column"}
          flexWrap="wrap"
          gap={3}
          alignItems="center"
        >
          {actions.map((action, index) => (
            <Box
            display={!isTablet ? "flex" : "block"}
            justifyContent="center"
            alignItems="center"
            key={index}
            ><ActionCard title={action.title} id={index} /></Box>
          ))}
        </Box>
      );
}