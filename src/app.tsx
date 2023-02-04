import React from "react";
import { Router } from "react-chrome-extension-router";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import "./tailwind.css";

// const router = createHashRouter([
//   {
//     path: "/popup",
//     element: <App title="popup" />,
//   },
//   {
//     path: "/page",
//     element: <App title="page" />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App title="pristel" />
    </Router>
  </React.StrictMode>,
);
