import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import AppRoutes from "./Pages/Routes";
import { RecommendationsProvider } from "./RecommendationsContext";

function App() {
  return (
    <RecommendationsProvider>
      <div>
        <AppRoutes />
      </div>
    </RecommendationsProvider>
  );
}

export default App;
