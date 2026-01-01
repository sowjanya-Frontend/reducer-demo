import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import App from "./App.jsx";
import { LiveDemo } from "./live-video/live-video.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LiveDemo />
  </StrictMode>
);
