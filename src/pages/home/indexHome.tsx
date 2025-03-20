// src/pages/home/indexHome.tsx
import React from "react";
import HeaderHome from "./headerHome";

const IndexHome = () => {
  return (
    <div>
      <HeaderHome />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Compensando a altura do cabeçalho */}
        <h2>Conteúdo da página inicial</h2>
        <p>Bem-vindo à Home, mais informações aqui!</p>
      </div>
    </div>
  );
};

export default IndexHome;
