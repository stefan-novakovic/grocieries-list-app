import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./components/AppContainer/AppContainer";
import { DataProvider } from "./components/context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <AppContainer />
    </DataProvider>
  </React.StrictMode>
);
