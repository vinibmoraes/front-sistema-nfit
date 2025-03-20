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
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Person as UserIcon } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <form noValidate autoComplete="off">
            <FormControl
              sx={{
                width: "500px",
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
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
                  backgroundColor: "hsla(0,0%,100%,.1)",
                  padding: "0 10px", // Adicionar espaçamento para o input
                  height: "40px",
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

        {/* Box 3: Botões do cabeçalho */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            ml: "auto", // Move tudo para a direita
            alignItems: "center",
          }}
        >
          <IconButton color="inherit">
            <CardGiftcardIcon />
          </IconButton>
          <IconButton color="inherit">
            <PhonelinkLockIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpIcon />
          </IconButton>
          <IconButton color="inherit">
            <ChatIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              height: "30px",
              my: "auto",
            }}
          />

          <Button color="inherit" sx={{ textTransform: "none" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mr: "0px" }}
            >
              {/* Avatar */}
              <Avatar sx={{ width: 40, height: 40 }}>
                <UserIcon />
              </Avatar>

              {/* Nome e Descrição */}
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", lineHeight: 1 }}
                >
                  Vinicius de Moraes
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1 }}>
                  Next Fitness
                </Typography>
              </Box>
              <KeyboardArrowDownIcon sx={{ color: "white" }} />
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderHome;
