// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";

const root = document.getElementById("root");
document.documentElement.setAttribute("data-theme", "dark");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
