import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./nextfit-academia-logo.svg";

const HeaderHome = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#833ab4",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Box 1: Menu e Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 3 }}>
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 110, height: 50, objectFit: "contain" }}
          />
        </Box>

        {/* Box 2: Barra de pesquisa */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: "500px", color: "white" }}>
              {" "}
              {/* Aumenta a largura */}
              <OutlinedInput
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remover cor padrão da borda
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remover cor ao passar o mouse
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remover cor ao focar
                  },
                }}
                placeholder="Pesquisar clientes e leads"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
        </Box>

        {/* Box 3: Outros botões do cabeçalho */}
        <Box sx={{ ml: 2 }}>Div 4</Box>

        {/* Box 4: Botão de perfil */}
        <Box>
          <Button color="inherit">Meu perfil</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderHome;
