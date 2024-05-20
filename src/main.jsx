import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouteProvider from "./provider/Route.Provider.jsx";
import ReduxProvider from "./provider/Redux.Provider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider>
      <RouteProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </RouteProvider>
    </ReduxProvider>
  </React.StrictMode>
);
