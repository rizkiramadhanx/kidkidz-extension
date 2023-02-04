import React from "react";
import ReactDOM from "react-dom/client";
import Redirect from "./page/Warning";
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Redirect />
  </React.StrictMode>,
);
