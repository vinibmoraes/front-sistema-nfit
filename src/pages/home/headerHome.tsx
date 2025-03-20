import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Ícone do menu hambúrguer
import logo from "./nextfit-academia-logo.svg";

const HeaderHome = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#833ab4", padding: "0 !important", margin: 0 }}
    >
      <Toolbar sx={{ padding: 0, margin: 0, minHeight: "auto" }}>
        {/* Box para o Menu Hambúrguer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Box para a imagem */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 2, // Ajusta o espaço à direita
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: 110, height: 50, objectFit: "contain" }} // Retangular e ajuste de imagem
          />
        </Box>

        {/* Botões */}
        <Button color="inherit">Login</Button>
        <Button color="inherit">Cadastrar</Button>

        {/* Outras Boxs para conteúdo adicional */}
        <Box sx={{ ml: 2 }}>Div 4</Box>
        <Box sx={{ ml: 2 }}>Div 5</Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderHome;
