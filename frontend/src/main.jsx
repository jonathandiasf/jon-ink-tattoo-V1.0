import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importamos o BrowserRouter para habilitar as rotas no nosso app
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolvemos o App com BrowserRouter para que as rotas funcionem em toda a aplicação */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);