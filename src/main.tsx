import "build";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "app/app";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
