import { NotificationsNone, Person, Search } from "@mui/icons-material";
import {  Alert, Box, Button, Divider, IconButton, InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { useState } from "react";
import CardsList from "./Actions/Index";
import { CategoryButton } from "./components/CategoryButton";

export default function Dashboard() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const isMobileMedium = useMediaQuery("(min-width:375px)");
    return (
      <Box mt={isMobile ? 9 : 2}>
        <Box display="flex" 
        width="100%"
        px={2}
        mb={isMobile ? 4 : 6}
        gap={isMobileMedium ? 2 : 0}
        justifyContent="center" alignItems="center" pr={1}>
          {
            isMobileMedium && (
                <Box width="60%">
            <TextField
              fullWidth
              placeholder="Buscar una accion"
              sx={{
                m: 1,
                ".MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box> 
            )
          }
          <Box
          ml={5}
          width="20%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
          >
            <IconButton
              sx={{
                color: "#9C9DA7",
                border: "1px solid #9C9DA7",
                ".MuiPaper-root": {
                  backgroundColor: "#9C9DA7",
                  borderRadius: "8px",
                },
              }}
              children={<NotificationsNone />}
            />
            <IconButton
            sx={{border: "1px solid #9C9DA7"}}
            >
                <Person
            /></IconButton>
          </Box>
        </Box>
        <Categories />
        <CardsList />
      </Box>
    );
}

function Categories() {
    const [selectedId, setSelectedId] = useState(0)
    const isDesktop = useMediaQuery("(min-width:600px)");
    function handleChange(id: number) {setSelectedId(id)}
    const categories = [{
        title: "Actions",
        id: 0
    },
    {
        title: "Recursos Humanos",
        id: 1
    },
    {
        title: "Management",
        id: 2
    }
]
    return (
        <Box ml={isDesktop ? 4 : 0}>
          <Divider sx={{ color: "#9C9DA7" }} />
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            p={2}
            gap={2}
          >
            {categories.map((category) => (
              <CategoryButton
                id={category.id}
                key={category.id}
                isSelected={selectedId === category.id}
                onClick={handleChange}
              >
                {category.title}
              </CategoryButton>
            ))}
          </Box>
        </Box>
    )


}