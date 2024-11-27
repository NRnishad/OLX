import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { RecommendationsProvider } from "./RecommendationsContext";

function App() {
  return (
    <RecommendationsProvider>
      <div>
        <Home />
      </div>
    </RecommendationsProvider>
  );
}

export default App;
