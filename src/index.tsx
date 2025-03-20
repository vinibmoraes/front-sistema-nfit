import React from "react";
import ReactDOM from "react-dom/client";
import IndexHome from "./pages/home/indexHome";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexHome />
  </React.StrictMode>
);
reportWebVitals();
