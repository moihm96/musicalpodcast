import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import your styles
import Router from "./Presentation/routes/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
