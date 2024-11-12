//This is the primary TypeScript file that is referenced to from index.html

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //Here, React is used to define this as the root file, and acquires the rest
  //of the site content from the App function in App.tsx.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
