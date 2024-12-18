import React from "react";

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
